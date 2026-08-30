import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'Component Library',
  '/test': 'Backend Test',
  '/home': 'Dashboard',
  '/patients': 'Patients',
  '/appointments': 'Appointments',
  '/profile': 'Profile',
  '/settings': 'Settings',
};

export function PageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${pageTitles[pathname]} | UNSW Bionic Heart`;
  }, [pathname]);
  return null;
}
