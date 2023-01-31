<template>
  <div class="group flex flex-col gap-2">
    <div
      class="h-200px <sm:(h-250px) bg-center bg-no-repeat bg-cover rounded-1rem transition-all group-hover:(rounded-2rem)"
      :style="`background-image: url(${props.imgSrc})`">
    </div>
    <div class="flex flex-col transition-all">
      <p class="text-xl">{{ props.title }}</p>
      <p class="text-gray-700 text-base font-thin">{{ props.description }}</p>
      <p class="code-family text-gray-400 text-sm">{{ props.date }}</p>
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
