import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import autoAdapter from '@sveltejs/adapter-auto';
import nodeAdapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: process.env.ADAPTER_NODE ? nodeAdapter({ precompress: true }) : autoAdapter(),
    csp: {
      directives: {
        'frame-src': ['none'],
        'frame-ancestors': ['none']
      }
    }
  }
};
