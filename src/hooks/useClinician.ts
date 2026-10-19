
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../firebase/client';
import {
  fetchClinician,
  clearClinicianCache,
  type ClinicianDetails,
} from '../api/clinicianApi';

export function useClinician() {
  const [clinician, setClinician] = useState<ClinicianDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    let requestId = 0;

    const unsubscribe = onAuthStateChanged(
      auth,
      user => {
        const currentRequest = ++requestId;

        if (!active) return;

        if (!user) {
          clearClinicianCache();
          setClinician(null);
          setError(null);
          setIsLoading(false);
          return;
        }

        setClinician(null);
        setIsLoading(true);
        setError(null);

        if (!user.email) {
          setError('No email associated with this account.');
          setIsLoading(false);
          return;
        }

        async function loadClinician() {
          try {
            const result = await fetchClinician(
              user.uid,
              user.email!,
            );

            if (active && currentRequest === requestId) {
              setClinician(result);
            }
          } catch (error) {
            if (active && currentRequest === requestId) {
              setError(
                error instanceof Error
                  ? error.message
                  : 'Unable to load clinician.',
              );
            }
          } finally {
            if (active && currentRequest === requestId) {
              setIsLoading(false);
            }
          }
        }

        void loadClinician();
      },
      error => {
        if (active) {
          setClinician(null);
          setError(error.message);
          setIsLoading(false);
        }
      },
    );

    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  return { clinician, isLoading, error };
}
