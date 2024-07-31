import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handleErrorWithSentry, sentryHandle } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';
import { env } from '$env/dynamic/public';
import { userAgent } from '$lib/stores/user-agent';

Sentry.init({
	enabled: !!env.PUBLIC_SENTRY_DSN,
	dsn: env.PUBLIC_SENTRY_DSN,
	environment: env.PUBLIC_SENTRY_ENVIRONMENT,
	tracesSampleRate: 0.0,
	ignoreTransactions: ['/health']
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

export const handle = sequence(sentryHandle(), addSecurityHeaders);

export const handleError = handleErrorWithSentry();
