import type { GetStaffPatientData, ListStaffPatientsData } from './staffPortalTypes';

export type PatientSummary = Pick<NonNullable<GetStaffPatientData['patient']>, 'pid' | 'firstName' | 'lastName' | 'status'>;

export function flattenAssignedPatients(data: ListStaffPatientsData): PatientSummary[] {
  const patients = new Map<string, PatientSummary>();
  for (const staff of data.staffPatients) {
    for (const appointment of staff.appointments_on_clinician) {
      patients.set(appointment.patient.pid, appointment.patient);
    }
  }
  return [...patients.values()];
}

export function patientStatusLabel(status: string): string {
  switch (status) {
    case 'STABLE':
    case 'Normal':
      return 'Stable';
    case 'WARNING':
      return 'Warning';
    case 'UNSTABLE':
      return 'Unstable';
    default:
      return status;
  }
}
