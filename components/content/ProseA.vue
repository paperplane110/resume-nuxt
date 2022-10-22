<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  blank: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <NuxtLink :href="href"
    class="text-indigo-500 inline-block px-0.3rem rounded-1rem transition-all hover:(text-white cursor-pointer bg-indigo-500)">
    <slot />
  </NuxtLink>
</template>