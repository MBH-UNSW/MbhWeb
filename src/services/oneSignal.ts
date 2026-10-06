import OneSignal from 'react-onesignal';

const oneSignalAppId = import.meta.env.VITE_ONESIGNAL_APP_ID;

let initPromise: Promise<void> | null = null;

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

function getClinicianExternalId() {
  const session = localStorage.getItem('session');
  if (!session) {
    return 'clinician-browser';
  }

  try {
    const parsedSession = JSON.parse(session) as { uid?: string; email?: string };
    return parsedSession.uid || parsedSession.email || 'clinician-browser';
  } catch {
    return session || 'clinician-browser';
  }
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
  }).then(async () => {
    await OneSignal.login(getClinicianExternalId());
    OneSignal.User.addTag('role', 'clinician');
    OneSignal.User.addTag('logbook_updates', 'enabled');
  });

  return initPromise;
}

export async function promptForNotifications() {
  await initOneSignal();

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
    if (logbookNotification) {
      onNotification(logbookNotification);
    }
  };

  void initOneSignal().then(() => {
    if (isSubscribed) {
      OneSignal.Notifications.addEventListener('foregroundWillDisplay', handler);
    }
  });

  return () => {
    isSubscribed = false;
    OneSignal.Notifications.removeEventListener('foregroundWillDisplay', handler);
  };
}
