<script setup lang="ts">
import type { Content } from '@prismicio/client';
import AppBounded from '~/components/AppBounded.vue';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ShowcaseSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    '.showcase__heading',
    { y: 100 },
    {
      y: 0,
      ease: 'power2.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: '.showcase__heading',
        start: 'top center',
        toggleActions: 'play pause resume reverse',
      },
    },
  );
});
</script>

<template>
  <AppBounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div
      class="absolute -z-50 aspect-video w-full max-w-2xl rounded-full bg-sky-600 blur-[120px] filter mix-blend-screen"
    />
    <PrismicRichText
      :field="slice.primary.heading"
      wrapper="header"
      class="showcase__heading text-balance font-medium text-center text-5xl md:text-7xl"
    />
    <article
      class="relative mt-16 grid items-center gap-8 rounded-xl border border-sky-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 p-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12"
    >
      <div class="gridBackground" />
      <div>
        <PrismicText
          :field="slice.primary.subheading"
          wrapper="h3"
          class="mt-6 text-2xl font-normal"
        />
        <PrismicRichText
          :field="slice.primary.body"
          wrapper="div"
          class="prose prose-invert mt-4 max-w-xl"
        />
        <PrismicText
          :field="slice.primary.subheading2"
          wrapper="h3"
          class="mt-5 text-2xl font-normal"
        />
        <PrismicRichText
          :field="slice.primary.body2"
          wrapper="div"
          class="prose prose-invert mt-4 max-w-xl"
        />
        <PrismicText
          :field="slice.primary.subheading3"
          wrapper="h3"
          class="mt-5 text-2xl font-normal"
        />
        <PrismicRichText
          :field="slice.primary.body3"
          wrapper="div"
          class="prose prose-invert mt-4 max-w-xl"
        />
      </div>
      <PrismicImage
        :field="slice.primary.showcase_image"
        class="opacity-90 shadow-2xl lg:col-span-2 lg:pt-0"
        :class="
          slice.variation === 'reverse'
            ? 'lg:order-1 lg:translate-x-[15%]'
            : 'lg:-order-1 lg:translate-x-[-15%]'
        "
      />
    </article>
  </AppBounded>
</template>
