<script setup lang="ts">
import type { Content } from '@prismicio/client';
defineProps<{
  settings?: Content.SettingsDocument;
}>();

const isOpen = ref(false);
</script>

<template>
  <header class="sticky top-0 z-10 bg-slate-950 mb-6 p-4 md:p-6">
    <nav
      aria-label="Main navigation"
      class="mx-auto max-w-6xl flex flex-col justify-between py-2 md:flex-row md:items-center"
    >
      <div class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="z-50"
          aria-label="Home"
          title="Home"
          @click="isOpen = false"
        >
          <NuxitesLogo class="size-9" />
          <span class="sr-only">{{ settings?.data.site_title }} home page</span>
        </NuxtLink>
        <button
          class="block md:hidden p-2 text-3xl"
          :aria-expanded="isOpen"
          @click="isOpen = true"
        >
          <Icon name="ph-list-bold" class="w-6 h-6" />
        </button>
      </div>

      <div
        class="md:hidden fixed inset-0 z-40 flex flex-col items-end bg-gray-950 pr-4 pt-4 transition-transform duration-300 ease-in-out will-change-transform"
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <button class="block p-2 text-3xl" @click="isOpen = false">
          <Icon name="ph-x-bold" class="w-6 h-6" />
        </button>
        <ul class="grid justify-items-end gap-6">
          <li v-for="link in settings?.data.navigation" :key="link.key">
            <PrismicLink
              :field="link"
              :class="{ buttonLink: link.variant === 'Button' }"
              class="block min-h-11 px-3 text-3xl first:mt-8"
            />
          </li>
        </ul>
      </div>
      <ul class="hidden md:flex gap-6">
        <li v-for="link in settings?.data.navigation" :key="link.key">
          <PrismicLink
            :field="link"
            :class="{ buttonLink: link.variant === 'Button' }"
            class="inline-flex min-h-11 items-center"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>
