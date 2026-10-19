import {
  listClinicians,
  type ListCliniciansData,
} from '@mbh/dataconnect';

export type ClinicianDetails = ListCliniciansData['clinicians'][number];

// Cache requests so clinician data is fetched once per user
const clinicianCache = new Map<string, Promise<ClinicianDetails>>();

export function fetchClinician(
  uid: string,
  email: string,
): Promise<ClinicianDetails> {
  const cacheKey = `${uid}:${email.trim().toLowerCase()}`;
  const cached = clinicianCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  const request = listClinicians()
    .then(result => {
      const clinician = result.data.clinicians.find(
        clinician =>
          clinician.email.trim().toLowerCase() ===
          email.trim().toLowerCase(),
      );

      if (!clinician) {
        throw new Error('Clinician not found.');
      }

      return clinician;
    })
    .catch(error => {
      clinicianCache.delete(cacheKey);
      throw error;
    });

  clinicianCache.set(cacheKey, request);

  return request;
}

export function clearClinicianCache() {
  clinicianCache.clear();
}
