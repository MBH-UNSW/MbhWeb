import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { LoadingBar } from '../components/loadingBar/LoadingBar';

export function ProtectedRoute() {
  const { user, loading, profile, role } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{ padding: '32px' }}>
        <LoadingBar progress={66} label="Checking your session..." />
      </div>
    );
  }

  if (!user || !profile || !role) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
