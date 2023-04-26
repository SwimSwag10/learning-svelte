import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const config = {
  plugins: [sveltekit()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
};

export default config;

// this code is from the svelte skeleton code. The above code was coopied form rel.
// export default defineConfig({
// 	plugins: [sveltekit()]
// });