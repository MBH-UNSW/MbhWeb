import { defineConfig, loadEnv } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  envDir: loadEnv(mode, '.', 'VITE_FIREBASE_').VITE_FIREBASE_API_KEY ? '.' : './ubhWebApp',
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), svgr()],
}));
