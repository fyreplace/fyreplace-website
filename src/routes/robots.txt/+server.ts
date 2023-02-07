import { env } from '$env/dynamic/public';

export function GET(): Response {
  console.debug(env.PUBLIC_ENVIRONMENT);
  const restricted = env.PUBLIC_ENVIRONMENT !== 'production';
  const robots = 'User-agent: *\nDisallow: ' + (restricted ? '/' : '');
  return new Response(robots, { headers: { 'Content-Type': 'text/plain' } });
}
