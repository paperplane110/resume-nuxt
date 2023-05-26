<template>
  <NuxtLink :to="to"
    class="flex justify-center items-center w-45px h-45px mx-2 border-2 rounded-xl border-white transition-all duration-200 hover:(border-secondary text-secondary) transform active:translate-y-2px">
    <Icon :icon="icon" />
  </NuxtLink>
</template>

<script setup lang='ts'>
type props = {
  icon: string,
  to: string,
}

defineProps<props>()
</script>
