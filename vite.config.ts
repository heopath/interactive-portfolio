import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/interactive-portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        v1: 'v1.html',
        v2: 'v2.html',
      },
    },
  },
})
