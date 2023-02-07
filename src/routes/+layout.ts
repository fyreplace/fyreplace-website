import { browser } from '$app/environment';
import { userAgent } from '$lib/stores/user-agent';

if (browser) {
  userAgent.set(navigator.userAgent);
}
