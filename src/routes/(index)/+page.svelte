<script>
  import { env } from '$env/dynamic/public';
  import { isApplePlatform } from '$lib/stores/user-agent';
  import Logo from './logo.svelte';
  import LinkButton from './link-button.svelte';
  import AppleAppStore from './apple-app-store.svelte';
  import GooglePlayStore from './google-play-store.svelte';
</script>

<svelte:head>
  <title>Fyreplace</title>
</svelte:head>

<main class="page">
  <Logo />
  <h1>Fyreplace</h1>
  <p>Currently in <strong>public beta</strong>!</p>
  <div class="buttons">
    <LinkButton
      href={env.PUBLIC_APPLE_APP_STORE_URL}
      large
      order={$isApplePlatform ? 0 : 1}
      color="var(--color-accent-ios)"
    >
      <AppleAppStore />App Store
    </LinkButton>
    <LinkButton
      href={env.PUBLIC_GOOGLE_PLAY_STORE_URL}
      large
      order={$isApplePlatform ? 1 : 0}
      color="var(--color-accent-android)"
    >
      <GooglePlayStore />Google Play
    </LinkButton>
  </div>
  <div class="buttons">
    <LinkButton href={env.PUBLIC_TELEGRAM_URL}>Telegram group</LinkButton>
    <LinkButton href={env.PUBLIC_TELEGRAM_CHANNEL_URL}>Telegram channel</LinkButton>
    <LinkButton href={env.PUBLIC_DISCORD_URL}>Discord server</LinkButton>
    <LinkButton href={env.PUBLIC_REDDIT_URL}>Subreddit</LinkButton>
    <LinkButton href={env.PUBLIC_PATREON_URL}>Patreon</LinkButton>
    <LinkButton href={env.PUBLIC_GITHUB_URL}>Source code</LinkButton>
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
