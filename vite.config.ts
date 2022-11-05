import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      workbox: { globPatterns: ['**/*.{js,css,html,ico,png,svg,txt}'] },
      manifest: {
        name: 'Speak Georgian App',
        short_name: 'SpeakGeorgian',
        description: 'The app to learn and repeat georgian words',
        theme_color: '#ffffff',
        icons: [
          {
            src: '192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
