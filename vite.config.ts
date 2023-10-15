import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': `${path.resolve(__dirname, "./src/assets/")}`,
      '@components': `${path.resolve(__dirname, "./src/components")}`,
      '@data': `${path.resolve(__dirname, "./src/data")}`,
      '@helpers': `${path.resolve(__dirname, "./src/helpers")}`,
      '@hooks': `${path.resolve(__dirname, "./src/hooks")}`,
      '@pages': `${path.resolve(__dirname, "./src/pages")}`,
      '@store': `${path.resolve(__dirname, "./src/store")}`,
    },
  },
});
