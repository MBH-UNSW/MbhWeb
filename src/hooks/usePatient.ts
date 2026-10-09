import { useEffect, useState } from 'react';
import { fetchPatients, type PatientSummary, fetchPatient, type PatientDetails } from '../api/patientApi';

export function usePatients() {
  const [patients, setPatients] = useState<PatientSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadPatients() {
      try {
        const result = await fetchPatients();

        if (active) {
          setPatients(result);
        }
      } catch (error) {
        if (active) {
          setError(
            error instanceof Error
              ? error.message
              : 'Unable to load patients.',
          );
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    void loadPatients();

    return () => {
      active = false;
    };
  }, []);

  return { patients, isLoading, error };
}

export function usePatient(pid: string | undefined) {
  const [patient, setPatient] = useState<PatientDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!pid) {
      setIsLoading(false);
      setError('No patient ID in the URL.');
      return;
    }

    const patientId = pid;

    let active = true;

    async function loadPatient() {
      setIsLoading(true);
      setError(null);

      try {
        const result = await fetchPatient(patientId);

        if (active) {
          setPatient(result);
        }
      } catch (error) {
        if (active) {
          setError(
            error instanceof Error
              ? error.message
              : 'Unable to load patient.',
          );
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    void loadPatient();

    return () => {
      active = false;
    };
  }, [pid]);

  return { patient, isLoading, error };
}