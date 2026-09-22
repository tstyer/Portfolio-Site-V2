import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // The deployed site lives at https://tstyer.github.io/Portfolio-Site-V2/, so built
  // asset URLs need that prefix or they resolve to the domain root and 404.
  // Only applied to builds, so `npm run dev` still serves from / as before.
  base: command === 'build' ? '/Portfolio-Site-V2/' : '/',
  plugins: [react(), tailwindcss()],
}))
