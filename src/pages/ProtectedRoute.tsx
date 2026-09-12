import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute() {
  const session = localStorage.getItem('session');
  if (!session) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
