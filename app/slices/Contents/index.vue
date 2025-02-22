<script setup lang="ts">
import type { Content } from '@prismicio/client';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const prismic = usePrismic();
const props = defineProps(
  getSliceComponentProps<Content.ContentsSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
);
const contentDetails = computed(() => {
  return props.slice.primary.content_details
    .map((item) => item.link)
    .filter((Link) =>
      prismic.isFilled.contentRelationship(Link),
    ) as unknown as Content.ContentDetailDocument[];
});
</script>

<template>
  <AppBounded>
    <section
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
    >
      <PrismicText
        :field="slice.primary.heading"
        wrapper="h2"
        class="mx-auto max-w-3xl text-balance text-center text-5xl md:text-7xl font-medium"
      />
      <PrismicRichText
        :field="slice.primary.body"
        wrapper="div"
        class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300"
      />
      <div class="mt-20 grid gap-16">
        <article
          v-for="(content, index) in contentDetails"
          :key="content.id"
          class="group relative grid gap-4 md:gap-8 opacity-85 transition-opacity will-change-auto duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 lg:grid-cols-3"
        >
          <div class="col-span-1 flex flex-col justify-center gap-4">
            <PrismicText
              :field="content.data.company"
              wrapper="h3"
              class="text-3xl font-medium text-balance"
            />
            <PrismicRichText
              :field="content.data.description"
              wrapper="div"
              class="max-w-3xl text-gray-300"
            />
            <PrismicLink
              :document="content"
              class="z-10 after:absolute after:inset-0 hover:underline"
            >
              <PrismicText :field="content.data.company" />
            </PrismicLink>
          </div>
          <div
            class="relative lg:col-span-2"
            :class="index % 2 && 'md:-order-1'"
          >
            <div class="image__glow -bottom-8 -left-4 bg-sky-500" />
            <div class="image__glow -right-4 -top-8 bg-teal-500" />
            <PrismicImage
              :field="content.data.cover"
              class="z-20 scale-[.98] rounded-xl transition-transform will-change-transform duration-300 group-hover:scale-100 object-cover"
            />
          </div>
        </article>
      </div>
    </section>
  </AppBounded>
</template>
