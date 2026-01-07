import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path set to '/' for custom domain (nullscape.co.uk)
  // The CNAME file in public/ tells GitHub Pages to serve from the custom domain
  base: '/',
  build: {
    outDir: 'dist',
  },
})
