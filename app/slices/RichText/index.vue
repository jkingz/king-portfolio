<script setup lang="ts">
import type { Content } from '@prismicio/client';

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.RichTextSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
);
</script>

<template>
  <AppBounded>
    <section>
      <PrismicRichText
        :field="slice.primary.content"
        class="prose prose-invert prose-slate w-full text-center"
        wrapper="div"
      />
    </section>
  </AppBounded>
</template>

<style scoped>
section:deep(.richtext) {
  max-width: 600px;
  margin: 6em auto;
}

section:deep(.richtext .codespan) {
  font-family: monospace;
}
</style>
