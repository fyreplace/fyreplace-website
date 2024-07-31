<script>
	import {
		siApple,
		siDiscord,
		siGithub,
		siGoogleplay,
		siPatreon,
		siReddit,
		siTelegram
	} from 'simple-icons';
	import { isApplePlatform } from '$lib/stores/user-agent';
	import { env } from '$env/dynamic/public';
	import Logo from './logo.svelte';
	import LinkButton from './link-button.svelte';

	const externalLinks = [
		{
			url: env.PUBLIC_TELEGRAM_URL,
			text: 'Telegram group',
			logo: siTelegram
		},
		{
			url: env.PUBLIC_TELEGRAM_CHANNEL_URL,
			text: 'Telegram channel',
			logo: siTelegram
		},
		{
			url: env.PUBLIC_DISCORD_URL,
			text: 'Discord server',
			logo: siDiscord
		},
		{
			url: env.PUBLIC_REDDIT_URL,
			text: 'Subreddit',
			logo: siReddit
		},
		{
			url: env.PUBLIC_PATREON_URL,
			text: 'Patreon',
			logo: siPatreon
		},
		{
			url: env.PUBLIC_GITHUB_URL,
			text: 'Source code',
			logo: siGithub
		}
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
				<svg viewBox="0 0 24 24" class="brand-logo apple-tweak">
					<path d={siApple.path} />
				</svg>
				App Store
			</LinkButton>
		{/if}
		{#if env.PUBLIC_GOOGLE_PLAY_STORE_URL}
			<LinkButton
				href={env.PUBLIC_GOOGLE_PLAY_STORE_URL}
				large
				order={$isApplePlatform ? 1 : 0}
				color="var(--color-accent-android)"
			>
				<svg viewBox="0 0 24 24" class="brand-logo">
					<path d={siGoogleplay.path} />
				</svg>
				Google Play
			</LinkButton>
		{/if}
	</div>
	<div class="buttons">
		{#each externalLinks as externalLink}
			{#if externalLink.url}
				<LinkButton href={externalLink.url}>
					<svg viewBox="0 0 24 24" class="brand-logo">
						<path d={externalLink.logo.path} />
					</svg>
					{externalLink.text}
				</LinkButton>
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

	.brand-logo {
		width: 1.5em;
		height: 1.5em;
		overflow: visible;
	}

	.apple-tweak {
		transform: translateY(-2px);
	}
</style>
