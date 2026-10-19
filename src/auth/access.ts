export type StaffRole = 'clinician' | 'nurse';

export function isStaffRole(role: unknown): role is StaffRole {
  return role === 'clinician' || role === 'nurse';
}

export function hasActiveStaffProfile<
  T extends { firebaseAuthUid?: string | null; isDeactivated: boolean },
>(uid: string, profile: T | null): profile is T & { firebaseAuthUid: string } {
  return profile !== null && profile.firebaseAuthUid === uid && !profile.isDeactivated;
}
