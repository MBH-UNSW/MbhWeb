import { Box } from '@mantine/core';
import { useEffect, useState } from 'react';
import OneSignal from 'react-onesignal';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/buttons/Button';
import { Header1 } from '../components/typography/Header';
import { Body1 } from '../components/typography/Body';

let oneSignalInitPromise: Promise<void> | null = null;

export default function TestPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('OneSignal has not started yet.');
  const oneSignalAppId = import.meta.env.VITE_ONESIGNAL_APP_ID;

  useEffect(() => {
    if (!oneSignalAppId) {
      setStatus('Add VITE_ONESIGNAL_APP_ID to your .env file to test OneSignal here.');
      return;
    }

    oneSignalInitPromise ??= OneSignal.init({
      appId: oneSignalAppId,
      allowLocalhostAsSecureOrigin: true,
      serviceWorkerPath: '/OneSignalSDKWorker.js',
    });

    oneSignalInitPromise
      .then(() => {
        setStatus('OneSignal is ready on the /test page.');
      })
      .catch(() => {
        setStatus('OneSignal failed to initialize. Check the app id and browser console.');
      });
  }, [oneSignalAppId]);

  const notifyAndReturnHome = async () => {
    if (!oneSignalAppId || !oneSignalInitPromise) {
      setStatus('OneSignal is not configured yet.');
      return;
    }

    await oneSignalInitPromise;
    const accepted = await OneSignal.Notifications.requestPermission();

    if (accepted) {
      new Notification('MBH it works', {
        body: 'Notifications are enabled for this browser.',
      });
    }

    navigate('/');
  };

  const registerPatient = async () => {
    if (!oneSignalAppId || !oneSignalInitPromise) {
      setStatus('OneSignal is not configured yet.');
      return;
    }

    await oneSignalInitPromise;
    const accepted = await OneSignal.Notifications.requestPermission();

    if (accepted) {
      new Notification('Patient registered', {
        body: 'Welcome! The new patient has been registered.',
      });
      setStatus('New patient registered and welcome notification sent.');
      return;
    }

    setStatus('New patient registered, but notifications were not enabled.');
  };

  return (
    <div>
      <Header1>Test Page</Header1>
      <Body1>{status}</Body1>
      <Box py="xl">
        <Button variant="default" size="md" fullWidth onClick={registerPatient}>
          Register patient
        </Button>
      </Box>
      <Box pb="xl">
        <Button variant="default" size="md" fullWidth onClick={notifyAndReturnHome}>
          Back to the main page
        </Button>
      </Box>
    </div>
  );
}
