<template>
  <nuxt-link class="link-button" :to="href" :style="color ? `--color-accent: ${color}` : ''"
    :class="{ '-large': large }">
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  large?: boolean
  color?: string
}>()
</script>

<style scoped>
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
