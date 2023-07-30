import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import * as Sentry from '@sentry/sveltekit';
import { env } from '$env/dynamic/public';
import { userAgent } from '$lib/stores/user-agent';

Sentry.init({
  dsn: env.PUBLIC_SENTRY_DSN,
  environment: env.PUBLIC_SENTRY_ENVIRONMENT,
  release: env.PUBLIC_SENTRY_RELEASE,
  ignoreTransactions: ['/health'],
  tracesSampleRate: 0.1
});

const addSecurityHeaders = (({ event, resolve }) => {
  userAgent.set(event.request.headers.get('user-agent') ?? undefined);
  event.setHeaders({
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer'
  });
  return resolve(event);
}) satisfies Handle;

export const handleError = Sentry.handleErrorWithSentry();

export const handle = sequence(Sentry.sentryHandle(), addSecurityHeaders);
