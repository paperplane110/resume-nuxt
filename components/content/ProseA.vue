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
  <NuxtLink :href="href" :target="blank?'_blank':'_self'"
    class="text-indigo-500 transition-all hover:(cursor-pointer underline)">
    <slot />
  </NuxtLink>
</template>