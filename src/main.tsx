import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import './index.css';
import App from './App.tsx';
import { theme } from './themes/theme.ts';
import { AuthProvider } from './auth/AuthContext.tsx';

const root = document.getElementById('root');

createRoot(root!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </MantineProvider>
  </StrictMode>,
);
