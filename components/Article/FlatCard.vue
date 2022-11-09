<template>
  <div class="group">
    <div class="h-250px bg-center bg-no-repeat bg-cover rounded-1rem transition-all group-hover:(rounded-3rem)"
      :style="`background-image: url(${props.imgSrc})`">
    </div>
    <p class="text-3xl font-thin">{{ props.title }}</p>
    <div class="flex gap-4 transition-all">
      <p class="code-family text-sm">{{ props.date }}</p>
      <p class="text-gray-400 font-thin text-base">{{ props.description }}</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps<{
  imgSrc: string
  title: string
  date: string
  description: string
}>()
</script>
