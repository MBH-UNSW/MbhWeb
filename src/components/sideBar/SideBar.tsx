import classes from './SideBar.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/client';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  House,
  SquareActivity,
  Calendar,
  UserRound,
  MessageSquare,
  Settings,
  LogOut,
} from 'lucide-react';
import { /*Logo,*/ FullLogo } from '../icons/Logo';
import { useAuth } from '../../auth/useAuth';

const allTabs = [
  { link: '/home', label: 'Dashboard', icon: House, roles: ['nurse', 'clinician'] },
  { link: '/patients', label: 'Patients', icon: SquareActivity, roles: ['nurse', 'clinician'] },
  { link: '/appointments', label: 'Appointments', icon: Calendar, roles: ['nurse', 'clinician'] },
  { link: '/profile', label: 'Profile', icon: UserRound, roles: ['nurse', 'clinician'] },
  { link: '/messages', label: 'Messages', icon: MessageSquare, roles: ['nurse'] },
  { link: '/settings', label: 'Settings', icon: Settings, roles: ['nurse', 'clinician'] },
];

export function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Unable to sign out', error);
    }
  }

  const role = useAuth().role!;
  const allowedTabs = allTabs.filter(t => t.roles.includes(role));

  const links = allowedTabs.map(item => {
    const Icon = item.icon;
    const isActive = location.pathname === item.link;

    return (
      <Link
        key={item.label}
        to={item.link}
        className={`${classes.link} ${isActive ? classes.active : ''}`}
      >
        <Icon size={22} strokeWidth={2.5} className={classes.linkIcon} />
        <span>{item.label}</span>
      </Link>
    );
  });

  return (
    <nav className={classes.sideBar}>
      <div className={classes.header}>
        <FullLogo width={150} />
      </div>

      <div className={classes.divider} />
      <div className={classes.sideBarMain}>{links}</div>
      <button className={classes.logout} onClick={handleLogout}>
        <LogOut size={22} strokeWidth={2.5} />
        <span>Log out</span>
      </button>
    </nav>
  );
}
