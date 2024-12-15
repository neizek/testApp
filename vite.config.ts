import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	// css: {
	// 	preprocessorOptions: {
	// 		scss: {
	// 			additionalData: `@import "/src/styles/styles.scss";`
	// 		}
	// 	}
	// },
	server: {
		port: 5200
	},
	optimizeDeps: {
        exclude: ["svelte-codemirror-editor", "codemirror", "@codemirror/language-javascript" /* ... */],
    },
	plugins: [sveltekit()]
});
