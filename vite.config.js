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
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          emailjs: ['@emailjs/browser']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['@emailjs/browser'],
    force: true
  },
  define: {
    global: 'globalThis',
    'process.env.NODE_ENV': '"production"'
  },
  esbuild: {
    target: 'esnext'
  }
})
