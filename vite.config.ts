import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: You must replace `<YOUR_REPO_NAME>` with the name of your GitHub repository
  // for deployment to GitHub Pages to work correctly.
  base: '/real-estate-intake/', 
  plugins: [
    react(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
})