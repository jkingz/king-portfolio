<script setup lang="ts">
import NumberFlow from '@number-flow/vue';
import type { Content } from '@prismicio/client';
defineProps<{
  settings?: Content.SettingsDocument;
}>();
const { visitors } = useVisitors();
</script>

<template>
  <footer>
    <nav
      aria-label="Footer"
      class="flex flex-col justify-between items-center gap-6 px-8 py-7 md:flex-row border-t border-gray-600"
    >
      <NuxtLink to="/" class="z-50">
        <NuxitesLogo class="size-9" />
        <span class="sr-only">{{ settings?.data.site_title }} home page</span>
      </NuxtLink>
      <ul class="md:flex gap-6">
        <li v-for="link in settings?.data.navigation" :key="link.key">
          <PrismicLink
            :field="link"
            class="inline-flex min-h-11 items-center"
          />
        </li>
      </ul>
    </nav>
    <div id="" class="absolute">
      <div
        class="fixed z-[999] flex items-center justify-center bottom-2 w-full"
      >
        <a
          href="https://github.com/jkingz"
          rel="noopener noreferrer"
          target="_blank"
          class="text-neutral-500 text-xs w-fit flex justify-center items-center gap-2 cursor-pointer hover:text-neutral-200 transition-colors duration-300"
        >
          © 2025 <span class="text-balance text-teal-500">King</span>
          <span class="relative flex size-2">
            <span
              class="absolute bg-green-50 inline-flex size-full animate-ping rounded-full opacity-75"
            />

            <span
              class="relative bg-green-500 inline-flex size-2 scale-90 rounded-full"
            />
          </span>
          <span class="mt-1 sm:flex hidden">
            Active visitors:
            <NumberFlow
              aria-label="1"
              class="text-green-500 pl-2 text-sm font-bold font-mono"
              continuous=""
              role="img"
              data-will-change=""
              data-allow-mismatch=""
              :value="visitors"
            />
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>
