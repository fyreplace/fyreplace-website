import * as Sentry from '@sentry/sveltekit';
import { env } from '$env/dynamic/public';

Sentry.init({
  dsn: env.PUBLIC_SENTRY_DSN,
  environment: env.PUBLIC_SENTRY_ENVIRONMENT,
  integrations: [new Sentry.Replay()],
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.0,
  replaysOnErrorSampleRate: 1.0,
});

export const handleError = Sentry.handleErrorWithSentry();
