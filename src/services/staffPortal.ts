import { executeQuery, getDataConnect, queryRef } from 'firebase/data-connect';
import { firebaseApp } from '../firebase/client';
import type { GetMyStaffProfileData, GetStaffPatientData, ListStaffPatientsData } from '../dataconnect-generated';
import { flattenAssignedPatients } from './assignedPatients';
export type { PatientSummary } from './assignedPatients';

const connector = getDataConnect(firebaseApp, {
  service: 'mbhservice2026',
  location: 'australia-southeast1',
  connector: 'example',
});

export type StaffProfile = GetMyStaffProfileData['clinicians'][number];
export type PatientRecord = NonNullable<GetStaffPatientData['patient']>;

export async function getMyStaffProfile() {
  const result = await executeQuery(queryRef<GetMyStaffProfileData>(connector, 'GetMyStaffProfile'));
  return result.data.clinicians.length === 1 ? result.data.clinicians[0] : null;
}

export async function listStaffPatients() {
  const result = await executeQuery(queryRef<ListStaffPatientsData>(connector, 'ListStaffPatients'));
  return flattenAssignedPatients(result.data);
}

export async function getStaffPatient(pid: string) {
  const result = await executeQuery(queryRef<GetStaffPatientData, { pid: string }>(connector, 'GetStaffPatient', { pid }));
  return result.data.patient ?? null;
}
