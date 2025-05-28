import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      // Proxy API requests during development to Flask backend
      '/api': {
        target: 'https://letsdiag-flaskserver.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

