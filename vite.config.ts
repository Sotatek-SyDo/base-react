import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const client = env.VITE_CLIENT || 'default';

  return {
    root: path.resolve(__dirname, 'app'), // ⭐ QUAN TRỌNG

    plugins: [react()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'app/src'),
        '@core': path.resolve(__dirname, 'app/src/core'),
        '@pages': path.resolve(__dirname, 'app/src/pages'),
      },
    },

    server: {
      port: 5173,
      open: true,
    },

    build: {
      outDir: path.resolve(__dirname, `dist`),
      emptyOutDir: true,
    },
  };
});
