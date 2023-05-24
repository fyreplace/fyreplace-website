import type { RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export const POST = (async (event) => {
  if (!env.PUBLIC_SENTRY_DSN) {
    return new Response(null, { status: 403 });
  }

  const allowedDsnUrl = new URL(env.PUBLIC_SENTRY_DSN);
  const credentials = `${allowedDsnUrl.username}:${allowedDsnUrl.password}`;
  const envelope = await event.request.text();

  try {
    const requestHeader = JSON.parse(envelope.split('\n')[0]);

    if (requestHeader.dsn !== env.PUBLIC_SENTRY_DSN) {
      return new Response(null, { status: 400 });
    }
  } catch (error) {
    return new Response(null, { status: 400 });
  }

  allowedDsnUrl.username = '';
  allowedDsnUrl.password = '';
  allowedDsnUrl.pathname = `/api${allowedDsnUrl.pathname}/envelope/`;

  return fetch(allowedDsnUrl, {
    method: 'POST',
    headers: new Headers({
      Authorization: 'Basic ' + Buffer.from(credentials).toString('base64')
    }),
    credentials: 'include',
    body: envelope
  });
}) satisfies RequestHandler;
