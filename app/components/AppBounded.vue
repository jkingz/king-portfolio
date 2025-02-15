<script lang="ts" setup>
defineProps<{ as?: string }>();
</script>
<template>
  <Component
    :is="as || 'section'"
    class="px-4 py-12 first:!pt-10 md:px-6 md:py-14 lg:py-16"
  >
    <div class="mx-auto w-full max-w-6xl flex flex-col items-center">
      <slot />
    </div>
  </Component>
</template>
