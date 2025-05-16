import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // or wherever your Express/Mongo server is running
        changeOrigin: true,
        secure: false,
      },
    },
  },
});