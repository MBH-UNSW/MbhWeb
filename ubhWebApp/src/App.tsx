import { Routes, Route } from 'react-router-dom';

import AllComponents from './pages/AllComponents';
import TestPage from './pages/BackendTest';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllComponents />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
}

export default App;
