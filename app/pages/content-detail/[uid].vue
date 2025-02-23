<script setup lang="ts">
import { components } from '~/slices';
import gsap from 'gsap';

const prismic = usePrismic();
const route = useRoute();
const { data: page } = await useAsyncData(
  `[content_detail-uid-${route.params.uid}]`,
  () => prismic.client.getByUID('content_detail', route.params.uid as string),
);

useSeoMeta({
  title: page.value?.data.meta_title ?? undefined,
  ogTitle: page.value?.data.meta_title ?? undefined,
  description: page.value?.data.meta_description ?? undefined,
  ogDescription: page.value?.data.meta_description ?? undefined,
  ogImage:
    computed(() => prismic.asImageSrc(page.value?.data.meta_image)) ??
    undefined,
});

onMounted(() => {
  gsap.fromTo(
    '.content__image',
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power2.inOut',
    },
  );
});
</script>

<template>
  <main>
    <AppBounded>
      <header class="relative grid w-full place-items-center text-center">
        <NuxitesAppGridVue />
        <h1 class="text-5xl font-medium text-balance md:text-7xl">
          <PrismicText :field="page?.data.company" />
          <RichTextGlideText class="block text-lg">Project Details</RichTextGlideText>
        </h1>
        <PrismicImage
          v-if="$prismic.isFilled.image(page?.data.cover)"
          :field="page?.data.cover"
          class="content__image rounded-lg max-w-4xl md:max-w-2xl lg:max-w-3xl mt-10 w-full"
        />
      </header>
    </AppBounded>
    <SliceZone
      wrapper="div"
      class="mx-auto"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </main>
</template>
