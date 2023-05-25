import * as Sentry from '@sentry/sveltekit';
import { env } from '$env/dynamic/public';

const sentryTunnelPath = '/sentry/tunnel';

Sentry.init({
  dsn: env.PUBLIC_SENTRY_DSN,
  environment: env.PUBLIC_SENTRY_ENVIRONMENT,
  tunnel: sentryTunnelPath,
  ignoreTransactions: [sentryTunnelPath, '/health'],
  denyUrls: [sentryTunnelPath],
  tracesSampleRate: 0.1
});

export const handleError = Sentry.handleErrorWithSentry();
