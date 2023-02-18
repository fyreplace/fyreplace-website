<script lang="ts">
  import favicon from '$lib/assets/favicon.ico';
  import faviconAt16x16 from '$lib/assets/favicon-16x16.png';
  import faviconAt32x32 from '$lib/assets/favicon-32x32.png';
  import faviconAppleTouch from '$lib/assets/apple-touch-icon.png';
  import faviconSafari from '$lib/assets/safari-pinned-tab.svg';
</script>

<svelte:head>
  <link rel="icon" type="image/png" sizes="32x32" href={faviconAt32x32} />
  <link rel="icon" type="image/png" sizes="16x16" href={faviconAt16x16} />
  <link rel="icon" type="image/x-icon" href={favicon} />
  <link rel="apple-touch-icon" type="image/png" sizes="180x180" href={faviconAppleTouch} />
  <link
    rel="apple-touch-icon-precomposed"
    type="image/png"
    sizes="180x180"
    href={faviconAppleTouch}
  />
  <link rel="mask-icon" type="image/svg" href={faviconSafari} color="coral" />
</svelte:head>

<slot />
