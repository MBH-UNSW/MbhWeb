import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type PageTitleProps = {
  title?: string;
};

const pageTitles: Record<string, string> = {
  '/': 'Component Library',
  '/login': 'Log In',
  '/test': 'Backend Test',
  '/home': 'Dashboard',
  '/patients': 'Patients',
  '/appointments': 'Appointments',
  '/profile': 'Profile',
  '/messages': 'Message Inbox',
  '/settings': 'Settings',
};

export function PageTitle({ title }: PageTitleProps) {
  const { pathname } = useLocation();
  useEffect(() => {
    const pageTitle = title ?? pageTitles[pathname];
    document.title = `${pageTitle} | UNSW Bionic Heart`;
  }, [pathname, title]);
  return null;
}
