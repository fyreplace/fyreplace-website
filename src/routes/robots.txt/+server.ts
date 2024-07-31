import { type RequestHandler, text } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const GET = (() => {
	const restricted = (env.IS_PRODUCTION ?? '').toLowerCase() !== 'true';
	return text('User-agent: *\nDisallow: ' + (restricted ? '/' : ''));
}) satisfies RequestHandler;
