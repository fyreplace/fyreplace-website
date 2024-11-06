<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="layout">
	{@render children()}
</div>

<style>
	.layout {
		max-width: 720px;
		margin: 0 auto;
		padding-top: calc(env(safe-area-inset-top) + 1em);
		padding-bottom: calc(env(safe-area-inset-bottom) + 1em);
		padding-left: calc(env(safe-area-inset-left) + 1em);
		padding-right: calc(env(safe-area-inset-right) + 1em);
	}
</style>
