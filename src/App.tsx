import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import AllComponents from './pages/AllComponents';
import TestPage from './pages/BackendTest';
import DashboardPage from './pages/dashboard/Dashboard';
import PatientsPage from './pages/Patients';
import AppointmentsPage from './pages/Appointments';
import ProfilePage from './pages/Profile';
import SettingsPage from './pages/Settings';
import { PageTitle } from './components/pageTitle/PageTitle';

function App() {
  return (
    <>
      <PageTitle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AllComponents />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/home" element={<DashboardPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
