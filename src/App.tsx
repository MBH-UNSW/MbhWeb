import { Route,Routes } from 'react-router-dom';

import { PageTitle } from './components/pageTitle/PageTitle';
import AllComponents from './pages/AllComponents';
import AppointmentsPage from './pages/appointments/Appointments';
import TestPage from './pages/BackendTest';
import DashboardPage from './pages/dashboard/Dashboard';
import { Layout } from './pages/layout/Layout';
import LoginPage from './pages/login/Login';
import ConversationPage from './pages/messages/Conversation';
import MessagesPage from './pages/messages/Messages';
import PatientDetail from './pages/patients/PatientDetail';
import PatientsPage from './pages/patients/Patients';
import ProfilePage from './pages/profile/Profile';
import { ProtectedRoute } from './pages/ProtectedRoute';
import SettingsPage from './pages/settings/Settings';

function App() {
  return (
    <>
      <PageTitle />
      <Routes>
        <Route path="/components" element={<AllComponents />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<DashboardPage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/patients/:patientId" element={<PatientDetail />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/messages/:conversationId" element={<ConversationPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
