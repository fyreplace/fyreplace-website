<script>
  import { env } from '$env/dynamic/public';
  import { isApplePlatform } from '$lib/stores/user-agent';
  import Logo from './logo.svelte';
  import LinkButton from './link-button.svelte';
  import AppleAppStore from './apple-app-store.svelte';
  import GooglePlayStore from './google-play-store.svelte';

  const externalLinks = [
    { url: env.PUBLIC_TELEGRAM_URL, text: 'Telegram group' },
    { url: env.PUBLIC_TELEGRAM_CHANNEL_URL, text: 'Telegram channel' },
    { url: env.PUBLIC_DISCORD_URL, text: 'Discord server' },
    { url: env.PUBLIC_REDDIT_URL, text: 'Subreddit' },
    { url: env.PUBLIC_PATREON_URL, text: 'Patreon' },
    { url: env.PUBLIC_GITHUB_URL, text: 'Source code' }
  ];
</script>

<svelte:head>
  <title>Fyreplace</title>
</svelte:head>

<main class="page">
  <Logo />
  <h1>Fyreplace</h1>
  <p>Now publicly available for iOS and Android</p>
  <div class="buttons">
    {#if env.PUBLIC_APPLE_APP_STORE_URL}
      <LinkButton
        href={env.PUBLIC_APPLE_APP_STORE_URL}
        large
        order={$isApplePlatform ? 0 : 1}
        color="var(--color-accent-ios)"
      >
        <AppleAppStore></AppleAppStore>App Store
      </LinkButton>
    {/if}
    {#if env.PUBLIC_GOOGLE_PLAY_STORE_URL}
      <LinkButton
        href={env.PUBLIC_GOOGLE_PLAY_STORE_URL}
        large
        order={$isApplePlatform ? 1 : 0}
        color="var(--color-accent-android)"
      >
        <GooglePlayStore></GooglePlayStore>Google Play
      </LinkButton>
    {/if}
  </div>
  <div class="buttons">
    {#each externalLinks as externalLink}
      {#if externalLink.url}
        <LinkButton href={externalLink.url}>{externalLink.text}</LinkButton>
      {/if}
    {/each}
  </div>
</main>

<style>
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 600px) {
    .buttons {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
