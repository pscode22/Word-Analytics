import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3020 },
  plugins: [react(), mkcert()],
  build: {
    chunkSizeWarningLimit: 1024,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});
