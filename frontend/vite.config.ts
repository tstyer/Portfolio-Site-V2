import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this repo from /Portfolio-Site-V2/, so asset URLs built
  // for it need that prefix. Everywhere else - a local build, or a host that
  // serves from the domain root - '/' is correct. The Pages workflow is the only
  // thing that sets DEPLOY_TARGET=pages, so both targets build correctly from
  // the same config.
  base: process.env.DEPLOY_TARGET === 'pages' ? '/Portfolio-Site-V2/' : '/',

  plugins: [react(), tailwindcss()],

  // In development the React app runs on 5173 and the API on 5000, so a relative
  // "/api/blogs" would hit Vite and 404. Proxying /api to the backend means the
  // frontend uses the same relative paths in dev as in production, where Express
  // serves the API and the built app from one origin.
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
