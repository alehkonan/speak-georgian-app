import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, type VitePWAOptions } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

const pwaOption: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  devOptions: { enabled: true },
  workbox: { globPatterns: ['**/*.{js,css,html,ico,png,avif,svg,txt}'] },
  manifest: {
    name: 'Speak Georgian App',
    short_name: 'Speak Georgian',
    description: 'The app to learn georgian words',
    display: 'standalone',
    theme_color: '#ffc85f',
    background_color: '#ffc85f',
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
};

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  plugins: [tsconfigPaths(), react(), svgr(), VitePWA(pwaOption)],
});
