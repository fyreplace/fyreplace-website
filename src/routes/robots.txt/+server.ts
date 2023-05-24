import { env } from '$env/dynamic/public';

export function GET(): Response {
  const restricted = env.PUBLIC_ENVIRONMENT !== 'production';
  const robots = 'User-agent: *\nDisallow: ' + (restricted ? '/' : '');
  return new Response(robots, { headers: { 'Content-Type': 'text/plain' } });
}
