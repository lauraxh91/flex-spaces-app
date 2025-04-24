import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite handles fallback with spa fallback middleware internally.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    historyApiFallback: true,
    fs: {
      strict: false,
    },
  },
});
