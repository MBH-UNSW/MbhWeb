import classes from './SideBar.module.css'
import { useLocation, Link } from 'react-router-dom';

import { House, SquareActivity, Calendar, UserRound, MessageSquare, Settings, LogOut } from 'lucide-react';

const tabs = {
	nurse: [
		{ link: '/messages', label: 'Messages', icon: MessageSquare },
	],
	general: [
		{ link: '/home', label: 'Dashboard', icon: House },
		{ link: '/patients', label: 'Patients', icon: SquareActivity },
		{ link: '/appointments', label: 'Appointments', icon: Calendar },
		{ link: '/profile', label: 'Profile', icon: UserRound },
		{ link: '/settings', label: 'Settings', icon: Settings },
	],
};

export function SideBar() {
  const location = useLocation();

	const links = tabs.general.map((item) => {
		const Icon = item.icon;
		const isActive = location.pathname === item.link;

		return (
			<Link
				key={item.label}
				to={item.link}
				className={`${classes.link} ${isActive ? classes.active : ''}`}
			>
				<Icon
					size={22}
					strokeWidth={2.5}
					className={classes.linkIcon}
				/>

				<span>{item.label}</span>
			</Link>
		);
	});

  return (
		<nav className={classes.sideBar}>
			<div className={classes.header}>
				{/* UBH LOGO HERE */}
				<span className={classes.title}>UNSW Bionic Heart</span>
			</div>

			<div className={classes.divider} />

			<div className={classes.sideBarMain}>
				{links}
			</div>

			<button
				className={classes.logout}
			>
				<LogOut size={22} strokeWidth={2.5} />

				<span>Log out</span>
			</button>
		</nav>
  );
}