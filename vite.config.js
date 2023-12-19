import { wp_scripts } from '@kucrut/vite-for-wp/plugins';
import react from '@vitejs/plugin-react';
import { resolve } from "path";

export default {
	base: './',
	plugins: [
		wp_scripts(),
		react({
			jsxRuntime: 'classic',
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, '/js/src'),
		},
	},
	build: {
		target: 'modules',
		outDir: './dist',
		emptyOutDir: true,
		manifest: true,
		minify: true,
		sourcemap: true,
		rollupOptions: {
			input: {
				app: resolve(__dirname, '/js/src/main.tsx'),
			}
		},
	},
	server: {
		port: 3000,
		host: '0.0.0.0'
	},
};
