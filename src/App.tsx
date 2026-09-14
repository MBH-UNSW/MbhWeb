import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import AllComponents from './pages/AllComponents';
import TestPage from './pages/BackendTest';
import DashboardPage from './pages/dashboard/Dashboard';
import LoginPage from './pages/login/Login';
import PatientsPage from './pages/Patients';
import AppointmentsPage from './pages/Appointments';
import ProfilePage from './pages/profile/Profile';
import SettingsPage from './pages/Settings';
import { PageTitle } from './components/pageTitle/PageTitle';
import { ProtectedRoute } from './pages/ProtectedRoute';

function App() {
  return (
    <>
      <PageTitle />
      <Routes>
        <Route path="/" element={<AllComponents />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<DashboardPage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
