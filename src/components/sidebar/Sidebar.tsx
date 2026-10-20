import classes from './Sidebar.module.css';
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
  Menu,
  X,
} from 'lucide-react';
import { Logo, FullLogo } from '../icons/Logo';
import { useAuth } from '../../auth/useAuth';
import { Button } from '../buttons/Button';
import { IconButton } from '../buttons/IconButton';

type sidebarProps = {
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
  mobileOpen: boolean;
  onMobileOpenChange: (mobileOpen: boolean) => void;
};

const allTabs = [
  { link: '/home', label: 'Dashboard', icon: House, roles: ['nurse', 'clinician'] },
  { link: '/patients', label: 'Patients', icon: SquareActivity, roles: ['nurse', 'clinician'] },
  { link: '/appointments', label: 'Appointments', icon: Calendar, roles: ['nurse', 'clinician'] },
  { link: '/profile', label: 'Profile', icon: UserRound, roles: ['nurse', 'clinician'] },
  { link: '/messages', label: 'Messages', icon: MessageSquare, roles: ['nurse'] },
  { link: '/settings', label: 'Settings', icon: Settings, roles: ['nurse', 'clinician'] },
];

export function Sidebar({
  collapsed,
  onCollapsedChange,
  mobileOpen,
  onMobileOpenChange,
}: sidebarProps) {
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

  const role = useAuth().role;
  const allowedTabs = allTabs.filter(t => role && t.roles.includes(role));

  //const [mobileOpen, setMobileOpen] = useState(false);

  const links = allowedTabs.map(item => {
    const Icon = item.icon;
    const isActive =
      location.pathname === item.link || location.pathname.startsWith(`${item.link}/`);

    return (
      <Link
        key={item.label}
        to={item.link}
        title={item.label}
        onClick={() => onMobileOpenChange(false)}
        className={`${classes.link} ${isActive ? classes.active : ''}`}
      >
        <Icon size={22} strokeWidth={2.5} className={classes.linkIcon} />
        <span>{item.label}</span>
      </Link>
    );
  });

  return (
    <>
      <header
        className={`${classes.mobileTopbar} ${!collapsed ? classes.tabletSidebarVisible : ''}`}
      >
        <div className={classes.topbarLogo}>
          <FullLogo />
        </div>
        <div className={classes.tabletMenuButton}>
          <IconButton
            tooltip={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            variant="text"
            icon={collapsed ? Menu : X}
            size="md"
            iconProps={{ strokeWidth: 2.75, color: 'var(--mantine-color-ubhNeutral-9)' }}
            onClick={() => onCollapsedChange(!collapsed)}
          />
        </div>
        <div className={classes.phoneMenuButton}>
          <IconButton
            tooltip={mobileOpen ? 'Close menu' : 'Open menu'}
            variant="text"
            icon={mobileOpen ? X : Menu}
            size="md"
            iconProps={{
              strokeWidth: 2.75,
              color: 'var(--mantine-color-ubhNeutral-9)',
            }}
            onClick={() => onMobileOpenChange(!mobileOpen)}
          />
        </div>
      </header>
      <nav
        className={`${classes.sideBar} ${collapsed ? classes.collapsed : classes.expanded} ${mobileOpen ? classes.mobileOpen : ''}`}
      >
        <div className={classes.header}>
          <div className={classes.full}>
            <FullLogo />
          </div>
          <div className={classes.mini}>
            <Logo />
          </div>
        </div>

        <div className={classes.divider} />
        <div className={classes.sideBarMain}>{links}</div>
        <div className={classes.footerWrapper}>
          <IconButton
            tooltip={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            variant="text"
            icon={collapsed ? Menu : X}
            size="md"
            iconProps={{
              strokeWidth: 2.75,
              color: 'var(--mantine-color-ubhNeutral-9)',
            }}
            onClick={() => onCollapsedChange(!collapsed)}
          />
          <div className={classes.full}>
            <Button
              size="lg"
              leftIcon={LogOut}
              iconProps={{ strokeWidth: 2.75 }}
              onClick={handleLogout}
            >
              Log out
            </Button>
          </div>
          <div className={classes.mini}>
            <IconButton
              tooltip="Log out"
              icon={LogOut}
              size="md"
              iconProps={{ strokeWidth: 2.75 }}
              onClick={handleLogout}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
