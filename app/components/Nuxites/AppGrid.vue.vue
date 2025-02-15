<script lang="ts" setup>
import gsap from 'gsap';
const grid = [14, 33];

onMounted(() => {
  gsap.set('.glide-grid-item', {
    opacity: 0,
    transformOrigin: 'center',
    color: '#fff',
  });
  gsap.set('#glideGrid', { opacity: 1 });

  const tl = gsap.timeline();
  tl.to('.glide-grid-item', {
    keyframes: [
      { opacity: 0, duration: 0 },
      {
        opacity: 0.4,
        rotation: '+=180',
        color: '#0284c7',
        scale: 3,
        duration: 0.6,
        stagger: {
          amount: 2,
          grid,
          from: 'center',
        },
      },
      {
        opacity: 0.2,
        rotation: '+=180',
        color: '#ffffff',
        scale: 1,
        duration: 0.6,
        stagger: {
          amount: 3,
          grid,
          from: 'center',
        },
      },
    ],
  });

  tl.to('.glide-grid-item', {
    delay: 6,
    repeat: -1,
    repeatDelay: 6,
    keyframes: [
      { opacity: 0, duration: 0 },
      {
        opacity: 0.4,
        rotation: '+=180',
        color: '#0284c7',
        scale: 3,
        duration: 0.6,
        stagger: {
          amount: 2,
          grid,
          from: 'center',
        },
      },
      {
        opacity: 0.2,
        rotation: '+=180',
        color: '#ffffff',
        scale: 1,
        duration: 0.6,
        stagger: {
          amount: 3,
          grid,
          from: 'center',
        },
      },
    ],
  });
});
</script>
<template>
  <svg
    id="glideGrid"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 935 425"
    class="absolute -left-2 -top-14 -z-10"
    fill="none"
    style="mask-image: linear-gradient(black, transparent)"
  >
    <g class="nuxites-grid-group">
      <template v-for="x in grid[0]" :key="x">
        <path
          v-for="i in grid[1]"
          :key="i"
          fill="currentColor"
          opacity=".2"
          class="glide-grid-item"
          :d="`M${(i - 1) * 32 + 5} ${(x - 1) * 32 + 10}l1.806,-2.951l-5,2.951l3.936,1.049l-0.742,-1.049z`"
        />
      </template>
    </g>
  </svg>
</template>
