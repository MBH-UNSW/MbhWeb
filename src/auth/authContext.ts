import { createContext } from 'react';
import { type User } from 'firebase/auth';
import type { StaffProfile } from '../services/staffPortal';
import type { StaffRole } from './access';

export type AuthContextValue = {
  user: User | null;
  loading: boolean;
  profile: StaffProfile | null;
  role: StaffRole | null;
  accessError: string | null;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
