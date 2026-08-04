import { Routes, Route } from 'react-router-dom';

import AllComponents from './pages/AllComponents';
import TestPage from './pages/BackendTest';
import DashboardPage from './pages/Dashboard'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllComponents />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/home" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
