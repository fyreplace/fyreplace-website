import { promisify } from 'util';
import { exec } from 'child_process';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { sentrySvelteKit } from '@sentry/sveltekit';
import pkg from './package.json';

const execAsync = promisify(exec);
const version = (await execAsync('git describe --tags --abbrev=0')).stdout.trim().replace(/^v/, '');
const build = (await execAsync('git rev-list --count HEAD')).stdout.trim();

export default defineConfig({
  plugins: [
    sentrySvelteKit({
      adapter: process.env.ADAPTER_NODE ? 'node' : 'auto',
      sourceMapsUploadOptions: {
        release: {
          name: `${pkg.name}@${version}+${build}`
        }
      }
    }),
    sveltekit()
  ]
});
