// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    proxy: {
      '/api': {
        target: 'https://flex-spaces-app.onrender.com', // 🔁 Replace this
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
