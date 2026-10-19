import { executeQuery, getDataConnect, queryRef } from 'firebase/data-connect';
import { firebaseApp } from '../firebase/client';

export type StaffProfile = {
  pid: string;
  firebaseAuthUid?: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialty: string;
  isDeactivated: boolean;
};

const connector = getDataConnect(firebaseApp, {
  service: 'mbhservice2026',
  location: 'australia-southeast1',
  connector: 'example',
});

export async function getMyStaffProfile() {
  const result = await executeQuery(
    queryRef<{ clinicians: StaffProfile[] }>(connector, 'GetMyStaffProfile'),
  );
  return result.data.clinicians.length === 1 ? result.data.clinicians[0] : null;
}
