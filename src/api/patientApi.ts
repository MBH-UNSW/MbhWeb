import {
  getPatient,
  listPatients,
  type GetPatientData,
  type ListPatientsData,
} from '@mbh/dataconnect';

export type PatientStatus = 'Stable' | 'Warning' | 'Unstable';

type DataConnectPatient = ListPatientsData['patients'][number];

export interface PatientSummary {
  pid: string;
  displayId: string;
  name: string;
  status: PatientStatus;
}

export type PatientDetails = NonNullable<GetPatientData['patient']>;

function formatStatus(status: string): PatientStatus {
  switch (status.toUpperCase()) {
    case 'UNSTABLE':
      return 'Unstable';
    case 'WARNING':
      return 'Warning';
    default:
      return 'Stable';
  }
}

function formatPatientId(pid: string): string {
  return `P-${pid.slice(0, 8).toUpperCase()}`;
}

function toPatientSummary(patient: DataConnectPatient): PatientSummary {
  return {
    pid: patient.pid,
    displayId: formatPatientId(patient.pid),
    name: `${patient.firstName} ${patient.lastName}`,
    status: formatStatus(patient.status),
  };
}

export async function fetchPatients(): Promise<PatientSummary[]> {
  const result = await listPatients();

  return result.data.patients.map(toPatientSummary);
}

export async function fetchPatient(pid: string): Promise<PatientDetails> {
  const result = await getPatient({ pid });

  if (!result.data.patient) {
    throw new Error('Patient not found.');
  }

  return result.data.patient;
}