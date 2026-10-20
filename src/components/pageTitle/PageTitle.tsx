import { useEffect } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

type PageTitleProps = {
  title?: string;
};

const pageTitles: Record<string, string> = {
  '/components': 'Component Library',
  '/': 'Log In',
  '/test': 'Backend Test',
  '/home': 'Dashboard',
  '/patients': 'Patients',
  '/patients/:patientId': 'Patient Details',
  '/appointments': 'Appointments',
  '/profile': 'Profile',
  '/messages': 'Message Inbox',
  '/messages/:conversationId': 'Conversation',
  '/settings': 'Settings',
};

export function PageTitle({ title }: PageTitleProps) {
  const { pathname } = useLocation();
  useEffect(() => {
    const pageTitle =
      title ?? Object.entries(pageTitles).find(([path]) => matchPath(path, pathname))?.[1];
    document.title = pageTitle ? `${pageTitle} | UNSW Bionic Heart` : 'UNSW Bionic Heart';
  }, [pathname, title]);
  return null;
}
