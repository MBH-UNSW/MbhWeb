import { Outlet } from 'react-router-dom';
import { SideBar } from '../components/sideBar/SideBar';

// This is the shared page wrapper for side bar.
export function Layout() {
	return (
		<div style={{minHeight: '100vh'}}>
			<SideBar />

			<main style={{marginLeft: '320px', boxSizing: 'border-box', minHeight: '100vh'}}>
				<Outlet />
			</main>
		</div>
	);
}