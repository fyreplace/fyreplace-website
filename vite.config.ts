import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { sentrySvelteKit } from '@sentry/sveltekit';

const plugins = [sveltekit()];

if (process.env.SENTRY_AUTH_TOKEN) {
  plugins.unshift(sentrySvelteKit());
}

const config: UserConfig = { plugins };

export default config;
