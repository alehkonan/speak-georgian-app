import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	server: {
		host: true,
		port: 3000,
	},
	preview: {
		port: 3000,
	},
	plugins: [TanStackRouterVite(), tsconfigPaths(), svgr(), react()],
});
