<template>
  <main class="page">
    <logo />
    <h1>Fyreplace</h1>
    <p>Currently in public beta</p>
    <div class="buttons">
      <link-button v-if="config.public.appleAppStoreUrl" :href="config.public.appleAppStoreUrl" large
        color="var(--color-accent-ios)" :style="{ order: isApplePlatform ? 0 : 1 }">
        <apple-app-store />App Store
      </link-button>
      <link-button v-if="config.public.googlePlayStoreUrl" :href="config.public.googlePlayStoreUrl" large
        color="var(--color-accent-android)" :style="{ order: isApplePlatform ? 1 : 0 }">
        <google-play-store />Google Play
      </link-button>
    </div>
    <div class="buttons">
      <link-button href="https://t.me/FyreplaceNews">Telegram channel</link-button>
      <link-button href="https://t.me/Fyreplace">Telegram group</link-button>
      <link-button href="https://reddit.com/r/Fyreplace">Subreddit</link-button>
      <link-button href="https://github.com/fyreplace">GitHub org</link-button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { UAParser } from 'ua-parser-js'
import AppleAppStore from '~/components/icons/apple-app-store.vue'
import GooglePlayStore from '~/components/icons/google-play-store.vue'

definePageMeta({ layout: 'footer' })

const config = useRuntimeConfig()
const userAgent = process.client ? navigator.userAgent : useRequestHeaders()["user-agent"]
const parser = new UAParser(userAgent)
const isApplePlatform = ["Mac OS", "iOS"].includes(parser.getOS().name || '') || parser.getBrowser().name === "Safari"
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
