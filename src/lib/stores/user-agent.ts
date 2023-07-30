import { derived, writable } from 'svelte/store';
import UAParser from 'ua-parser-js';

export const userAgent = writable<string | undefined>();

export const isApplePlatform = derived(userAgent, ($userAgent) => {
  const parser = new UAParser($userAgent);
  try {
    return (
      ['Mac OS', 'iOS'].includes(parser.getOS().name || '') || parser.getBrowser().name === 'Safari'
    );
  } catch (error) {
    return false;
  }
});
