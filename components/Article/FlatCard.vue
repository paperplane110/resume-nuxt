<template>
  <div class="group flex flex-col gap-2">
    <ImageBg class="overflow-hidden rounded-1rem transition-all group-hover:(rounded-2rem)" :src="props.imgSrc"
      :hash="props.hash" />
    <div class="flex flex-col transition-all">
      <h4>{{ props.title }}</h4>
      <p class="my-0 text-gray-700 text-base">{{ props.description }}</p>
      <p class="code-family text-gray-400 text-sm">{{ props.date }}</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps<{
  imgSrc: string
  hash: string
  title: string
  date: string
  description: string
}>()
</script>
