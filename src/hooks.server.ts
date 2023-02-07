import { userAgent } from '$lib/stores/user-agent';
import type { Handle } from '@sveltejs/kit';

export const handle = (({ event, resolve }) => {
  userAgent.set(event.request.headers.get('user-agent') ?? undefined);
  event.setHeaders({
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer'
  });
  return resolve(event);
}) satisfies Handle;
