<script setup lang="ts">
import { Icon } from '#components';
import type { Content } from '@prismicio/client';
import gsap from 'gsap';

const prismic = usePrismic();
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.IntegrationsSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
);
const integrations = computed(() => {
  return props.slice.primary.integrations
    .map((item) => item.icon_id)
    .filter((icon) => prismic.isFilled.keyText(icon));
});

onMounted(() => {
  const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power2.inOut' } });

  tl.to('.pulsing__logo', {
    keyframes: [
      {
        filter: 'brightness(2)',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.in',
      },
      {
        filter: 'brightness(1)',
        opacity: 0.7,
        duration: 0.9,
      },
    ],
  });

  tl.to('.signalLine', {
    keyframes: [
      {
        backgroundPosition: '0% 0%',
      },
      {
        backgroundPosition: '100% 100%',
        duration: 1.6,
        stagger: { from: 'center', each: 0.3 },
      },
    ],
  });

  tl.to(
    '.pulsing__icon',
    {
      keyframes: [
        {
          opacity: 1,
          duration: 1,
          stagger: { from: 'center', each: 0.3 },
        },
        {
          opacity: 0.4,
          duration: 1,
          stagger: { from: 'center', each: 0.3 },
        },
      ],
    },
    '-=2',
  );
});
</script>

<template>
  <AppBounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="relative overflow-auto"
  >
    <img
      src="/assets/gradient.png"
      alt="Placeholder"
      class="w-full h-full inset-0 absolute object-cover"
    />
    <div class="relative">
      <PrismicText
        :field="slice.primary.heading"
        wrapper="h2"
        class="mx-auto max-w-3xl text-balance bg-gradient-to-b from-sky-50 to bg-sky-300 bg-clip-text text-transparent py-2 text-center text-5xl md:text-6xl font-medium"
      />
      <PrismicText
        :field="slice.primary.body"
        wrapper="div"
        class="mx-auto mt-6 max-w-md text-center text-balance text-gray-300"
      />
      <div class="mt-20 flex flex-col items-center md:flex-row">
        <template
          v-for="(integration, index) in integrations"
          :key="integration"
        >
          <template v-if="index === Math.floor(integrations.length / 2)">
            <NuxitesLogo
              class="pulsing__logo h-28 shrink-0 opacity-70 brightness-100"
            />
            <div class="signalLine rotate-180" />
          </template>
          <div
            class="pulsing__icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-sky-50/30 bg-sky-25 p-4 text-2xl text-sky-100 opacity-40 lg:text-4xl"
          >
            <Icon :name="integration" class="text-2xl" />
          </div>
          <div
            v-if="index < integrations.length - 1"
            class="signalLine"
            :class="
              index >= Math.floor(integrations.length / 2)
                ? 'rotate-180'
                : 'rotate-0'
            "
          />
        </template>
      </div>
    </div>
  </AppBounded>
</template>
