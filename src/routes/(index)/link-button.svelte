<script lang="ts">
  export let href: string;
  export let large = false;
  export let order = 0;
  export let color = '';
</script>

<a class="link-button" {href} class:-large={large} style:order style:--color-accent={color}>
  <slot></slot>
</a>

<style>
  .link-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    margin: 0.5em;
    padding: 0.5em 1.5em;
    box-sizing: border-box;
    border: 2px solid var(--color-accent);
    border-radius: 8px;
    color: white;
    stroke: white;
    stroke-width: 2px;
    fill: none;
    font-size: 1.2em;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
  }

  .link-button.-large {
    background: var(--color-accent);
    font-size: 1.4em;
  }

  .link-button:not(.-large) {
    color: var(--color-accent);
    stroke: var(--color-accent);
  }

  .link-button:hover {
    background: var(--color-accent);
    color: white;
    stroke: white;
    transition: 0.1s;
  }

  .link-button.-large:hover {
    filter: brightness(125%);
  }

  .link-button:active {
    transform: scale(0.9);
  }
</style>
