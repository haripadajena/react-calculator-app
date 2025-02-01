import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      // Custom Workbox configurations (optional)
    },
    manifest: {
      name: 'React Calculator App',
      short_name: 'Calculator App',
      description: 'A Progressive Calculator Web App built with Vite and React',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/react-calculator-app/',
      scope: '/react-calculator-app/',
      icons: [
        {
          src: '/react-calculator-app/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/react-calculator-app/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  }),
  ],
  base: '/react-calculator-app/',
})
