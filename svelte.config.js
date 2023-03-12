import { vitePreprocess } from '@sveltejs/kit/vite';
import autoAdapter from '@sveltejs/adapter-auto';
import nodeAdapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: process.env.NODE_ADAPTER ? nodeAdapter({ precompress: true }) : autoAdapter(),
    csp: {
      directives: {
        'frame-src': ['none'],
        'frame-ancestors': ['none']
      }
    }
  }
};
