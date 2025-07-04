import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          emailjs: ['@emailjs/browser']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['@emailjs/browser']
  },
  define: {
    global: 'globalThis'
  }
})
