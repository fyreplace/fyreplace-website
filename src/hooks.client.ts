import * as Sentry from '@sentry/sveltekit';
import { env } from '$env/dynamic/public';

const sentryTunnelPath = '/sentry/tunnel';

Sentry.init({
  dsn: env.PUBLIC_SENTRY_DSN,
  environment: env.PUBLIC_SENTRY_ENVIRONMENT,
  release: process.env.npm_package_name + '@' + env.PUBLIC_SENTRY_RELEASE,
  tunnel: sentryTunnelPath,
  ignoreTransactions: [sentryTunnelPath],
  denyUrls: [sentryTunnelPath],
  integrations: [Sentry.replayIntegration()],
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.0,
  replaysOnErrorSampleRate: 1.0
});

export const handleError = Sentry.handleErrorWithSentry();
