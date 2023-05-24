import { env } from '$env/dynamic/private';

export function GET(): Response {
  const restricted = (env.IS_PRODUCTION ?? '').toLowerCase() !== 'true';
  const robots = 'User-agent: *\nDisallow: ' + (restricted ? '/' : '');
  return new Response(robots, { headers: { 'Content-Type': 'text/plain' } });
}
