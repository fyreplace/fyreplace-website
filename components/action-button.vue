<template>
  <a class="action-button" :href="href">
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    href: {
      type: String
    }
  }
})
</script>

<style scoped>
.action-button {
  display: inline-block;
  margin: 0.5em;
  padding: 0.5em 1.5em;
  border: 2px solid var(--color-accent);
  border-radius: 8px;
  color: var(--color-accent);
  font-size: 1.2em;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

.action-button:hover {
  background: var(--color-accent);
  color: white;
  transition: 0.1s;
}

.action-button:active {
  transform: scale(0.9);
}
</style>
