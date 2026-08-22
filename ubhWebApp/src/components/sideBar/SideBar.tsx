import { useState } from 'react';
import classes from './SideBar.module.css'

import { House, SquareActivity, Calendar, UserRound, MessageSquare, Settings, LogOut } from 'lucide-react';

const tabs = {
	nurse: [
		{ link: '', label: 'Messages', icon: MessageSquare },
	],
	general: [
		{ link: '', label: 'Dashboard', icon: House },
		{ link: '', label: 'Patients', icon: SquareActivity },
		{ link: '', label: 'Appointments', icon: Calendar },
		{ link: '', label: 'Profile', icon: UserRound },
		{ link: '', label: 'Settings', icon: Settings },
	],
};

export function SideBar() {
  const [active, setActive] = useState('Dashboard');

	const links = tabs.general.map((item) => {
		const Icon = item.icon;

		return (
			<button
				key={item.label}
				className={`${classes.link} ${ active === item.label ? classes.active : ''}`}
				onClick={() => setActive(item.label)}
			>
				<Icon
					size={22}
					strokeWidth={2.5}
					className={classes.linkIcon}
				/>

				<span>{item.label}</span>
			</button>
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

			<button className={classes.logout}>
				<LogOut size={22} strokeWidth={2.5} />

				<span>Log out</span>
			</button>
		</nav>
  );
}