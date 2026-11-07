import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '../../components/sidebar/Sidebar';
import classes from './Layout.module.css';

// This is the shared page wrapper for side bar.
export function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={classes.layout}>
      <Sidebar
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        mobileOpen={mobileOpen}
        onMobileOpenChange={setMobileOpen}
      />

      <main className={`${classes.main} ${collapsed ? classes.collapsed : ''}`}>
        <Outlet />
      </main>
    </div>
  );
}
