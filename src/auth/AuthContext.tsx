import { useEffect, useMemo, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { onIdTokenChanged, signOut, type User } from 'firebase/auth';
import { httpsCallable } from 'firebase/functions';
import { auth, functions } from '../firebase/client';
import { AuthContext } from './authContext';
import { getMyStaffProfile, type StaffProfile } from '../services/staffPortal';
import { hasActiveStaffProfile, isStaffRole, type StaffRole } from './access';

type CurrentUserProfile = {
  uid: string;
  profileId: string;
  role: unknown;
  name: string;
  email: string;
  accountStatus: string;
};

const getCurrentUserProfile = httpsCallable<void, CurrentUserProfile>(
  functions,
  'getCurrentUserProfile',
);

const signOutErrorCodes = new Set([
  'permission-denied',
  'unauthenticated',
  'not-found',
  'invalid-argument',
]);

function callableErrorCode(error: unknown) {
  if (!(error instanceof FirebaseError)) return null;
  return error.code.replace(/^functions\//, '');
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<StaffProfile | null>(null);
  const [role, setRole] = useState<StaffRole | null>(null);
  const [accessError, setAccessError] = useState<string | null>(null);

  useEffect(() => {
    let revision = 0;
    let postSignOutAccessError: string | null = null;
    const unsubscribe = onIdTokenChanged(auth, async currentUser => {
      const currentRevision = ++revision;
      const initialAccessError = postSignOutAccessError;
      postSignOutAccessError = null;
      setUser(currentUser);
      setProfile(null);
      setRole(null);
      setAccessError(initialAccessError);
      setLoading(true);
      try {
        if (!currentUser) return;
        const profileResult = await getCurrentUserProfile();
        if (currentRevision !== revision) return;
        const account = profileResult.data;
        const accountRole = account.role;
        if (account.uid !== currentUser.uid || !isStaffRole(accountRole)) {
          postSignOutAccessError =
            'This website is for clinician and nurse staff accounts. Contact your administrator if you need access.';
          await signOut(auth).catch(() => setAccessError(postSignOutAccessError));
          return;
        }
        const staffProfile = await getMyStaffProfile();
        if (currentRevision !== revision) return;
        if (!hasActiveStaffProfile(currentUser.uid, staffProfile)) {
          postSignOutAccessError =
            'Your staff profile is missing or inactive. Contact your administrator.';
          await signOut(auth).catch(() => setAccessError(postSignOutAccessError));
          return;
        }
        if (staffProfile.pid !== account.profileId) {
          postSignOutAccessError =
            'Your staff profile is missing or inactive. Contact your administrator.';
          await signOut(auth).catch(() => setAccessError(postSignOutAccessError));
          return;
        }
        setProfile(staffProfile);
        setRole(accountRole);
      } catch (error) {
        if (currentRevision === revision) {
          const errorCode = callableErrorCode(error);
          if (errorCode && signOutErrorCodes.has(errorCode)) {
            postSignOutAccessError =
              'This website is for clinician and nurse staff accounts. Contact your administrator if you need access.';
            await signOut(auth).catch(() => setAccessError(postSignOutAccessError));
            return;
          }
          setAccessError('Unable to verify your staff account. Check your connection and retry.');
        }
      } finally {
        if (currentRevision === revision) setLoading(false);
      }
    });
    return () => {
      revision++;
      unsubscribe();
    };
  }, []);

  const value = useMemo(
    () => ({ user, loading, profile, role, accessError }),
    [user, loading, profile, role, accessError],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
