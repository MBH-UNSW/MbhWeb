import OneSignal from 'react-onesignal';
import type { StaffRole } from '../auth/access';

const oneSignalAppId = import.meta.env.VITE_ONESIGNAL_APP_ID;

let initPromise: Promise<void> | null = null;
let identityQueue: Promise<void> = Promise.resolve();
let desiredIdentity: { uid: string; role: StaffRole } | null = null;

export interface OneSignalNotification {
  title: string;
  message: string;
  url?: string;
  patientId?: string;
  patientName?: string;
  receivedAt: Date;
}

interface PushNotificationPayload {
  title?: string;
  body?: string;
  launchURL?: string;
  additionalData?: {
    patientId?: string;
    patientName?: string;
    type?: string;
  };
}

interface ForegroundNotificationEvent {
  notification?: PushNotificationPayload;
}

function toLogbookNotification(event: unknown): OneSignalNotification | null {
  const notificationEvent = event as ForegroundNotificationEvent;
  const notification = notificationEvent.notification;

  if (!notification || notification.additionalData?.type !== 'logbook_update') {
    return null;
  }

  return {
    title: notification.title || 'Logbook updated',
    message: notification.body || 'A patient logbook has been updated.',
    url: notification.launchURL,
    patientId: notification.additionalData.patientId,
    patientName: notification.additionalData.patientName,
    receivedAt: new Date(),
  };
}

export function initOneSignal() {
  if (!oneSignalAppId) {
    return Promise.reject(new Error('Missing VITE_ONESIGNAL_APP_ID.'));
  }

  initPromise ??= OneSignal.init({
    appId: oneSignalAppId,
    allowLocalhostAsSecureOrigin: true,
    serviceWorkerPath: '/OneSignalSDKWorker.js',
  }).catch(error => {
    initPromise = null;
    throw error;
  });

  return initPromise;
}

export function syncNotificationIdentity(identity: { uid: string; role: StaffRole } | null) {
  desiredIdentity = identity;
  if (!oneSignalAppId) return Promise.resolve();
  identityQueue = identityQueue.catch(() => undefined).then(async () => {
    await initOneSignal();
    if (identity !== desiredIdentity) return;
    if (identity) {
      await OneSignal.login(identity.uid);
      OneSignal.User.addTag('role', identity.role);
      OneSignal.User.addTag('logbook_updates', 'enabled');
    } else {
      await OneSignal.logout();
      OneSignal.User.removeTag('role');
      OneSignal.User.removeTag('logbook_updates');
    }
  });
  return identityQueue;
}

export async function promptForNotifications() {
  await initOneSignal();
  await identityQueue;
  if (!desiredIdentity) return;

  if (OneSignal.Notifications.permissionNative === 'default') {
    await OneSignal.Slidedown.promptPush();
  }
}

export function subscribeToLogbookPushNotifications(
  onNotification: (notification: OneSignalNotification) => void,
) {
  let isSubscribed = true;

  const handler = (event: unknown) => {
    const logbookNotification = toLogbookNotification(event);
    if (desiredIdentity && logbookNotification) {
      onNotification(logbookNotification);
    }
  };

  void initOneSignal().then(() => {
    if (isSubscribed) {
      OneSignal.Notifications.addEventListener('foregroundWillDisplay', handler);
    }
  }).catch(error => console.error('Unable to subscribe to notifications.', error));

  return () => {
    isSubscribed = false;
    OneSignal.Notifications.removeEventListener('foregroundWillDisplay', handler);
  };
}
