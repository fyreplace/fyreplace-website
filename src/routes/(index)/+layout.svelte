<script>
	import FooterLinks from './footer-links.svelte';
</script>

<div class="layout">
	<div class="content">
		<slot />
	</div>
	<FooterLinks />
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		padding-top: calc(env(safe-area-inset-top) + 3em);
		padding-bottom: 3em;
		padding-left: calc(env(safe-area-inset-left) + 1em);
		padding-right: calc(env(safe-area-inset-right) + 1em);
	}
</style>
