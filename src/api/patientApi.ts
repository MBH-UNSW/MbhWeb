import {
  getPatient,
  listPatients,
  type GetPatientData,
  type ListPatientsData,
} from '@mbh/dataconnect';
import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase/client';

export type PatientStatus = 'Stable' | 'Warning' | 'Unstable';

type PatientCodeField = { patientCode?: string | null };
type DataConnectPatient = ListPatientsData['patients'][number] & PatientCodeField;

export interface PatientSummary {
  pid: string;
  displayId: string;
  name: string;
  status: PatientStatus;
}

// The local generated SDK predates the patientCode field.
export type PatientDetails = NonNullable<GetPatientData['patient']> & PatientCodeField;

const getPatientDisplayCode = httpsCallable<
  { pid: string },
  { pid: string; patientCode: string }
>(functions, 'getPatientDisplayCode');

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

async function resolvePatientCode(patient: { pid: string } & PatientCodeField): Promise<string | null> {
  if (patient.patientCode) return patient.patientCode;

  try {
    const { data } = await getPatientDisplayCode({ pid: patient.pid });
    if (data.pid !== patient.pid || !data.patientCode) {
      throw new Error('Invalid patient code response.');
    }
    return data.patientCode;
  } catch (error) {
    console.warn('Unable to load patient code.', error);
    return null;
  }
}

async function toPatientSummary(patient: DataConnectPatient): Promise<PatientSummary> {
  return {
    pid: patient.pid,
    displayId: (await resolvePatientCode(patient)) ?? 'Pending',
    name: `${patient.firstName} ${patient.lastName}`,
    status: formatStatus(patient.status),
  };
}

export async function fetchPatients(): Promise<PatientSummary[]> {
  const result = await listPatients();

  return Promise.all(result.data.patients.map(toPatientSummary));
}

export async function fetchPatient(pid: string): Promise<PatientDetails> {
  const result = await getPatient({ pid });

  if (!result.data.patient) {
    throw new Error('Patient not found.');
  }

  const patient: PatientDetails = result.data.patient;
  return { ...patient, patientCode: await resolvePatientCode(patient) };
}
