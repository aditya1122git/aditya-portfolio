import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      onwarn: () => {},  // Suppress all warnings
    }
  },
  define: {
    global: 'globalThis',
    'process.env.NODE_ENV': '"production"'
  },
  esbuild: {
    target: 'esnext'
  }
})
