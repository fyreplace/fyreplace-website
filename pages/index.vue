<template>
  <main class="page">
    <logo />
    <h1>Fyreplace</h1>
    <p><strong>Coming soon...</strong> Follow development on:</p>
    <div class="buttons">
      <action-button href="https://t.me/FyreplaceNews">Telegram channel</action-button>
      <action-button href="https://t.me/Fyreplace">Telegram group</action-button>
      <action-button href="https://reddit.com/r/Fyreplace">Subreddit</action-button>
      <action-button href="https://github.com/fyreplace">GitHub org</action-button>
    </div>
  </main>
</template>

<script lang="ts">
definePageMeta({
  layout: 'footer'
})

export default {}
</script>

<style scoped>
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
