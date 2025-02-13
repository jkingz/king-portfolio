<script setup lang="ts">
import type { Content } from '@prismicio/client'
defineProps<{
  settings?: Content.SettingsDocument
}>()

</script>

<template>
  <footer>
    <nav
      aria-label="Footer"
      class="flex flex-col justify-between items-center gap-6 px-8 py-7
            md:flex-row border-t border-gray-600">
        <NuxtLink to="/" class="z-50">
          <NuxitesLogo class="size-9" />
          <span class="sr-only">{{ settings?.data.site_title }} home page</span>
        </NuxtLink>
        <p>Copyright © 2025 All rights reserved.</p>
      <ul class="md:flex gap-6">
        <li v-for="link in settings?.data.navigation" :key="link.key">
          <PrismicLink
            :field="link"
            class="inline-flex min-h-11 items-center"
          />
        </li>
      </ul>

    </nav>
  </footer>
</template>