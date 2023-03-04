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
  <NuxtLink :href="href" :target="blank ? '_blank' : '_self'"
    class="underline underline-dashed hover:(cursor-pointer underline-solid)">
    <slot />
  </NuxtLink>
</template>