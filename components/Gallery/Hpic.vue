<template>
  <div class="mt-6 text-right">
    <div class="rounded-2rem overflow-hidden">
      <Image v-bind="imgInfo" />
    </div>
    <div class="flex-1 mt-2">
      <Text sm class="dark:text-gray-300">
        {{ imgInfo.date }} / <b>{{ imgInfo.alt }}</b> / {{ imgInfo.place }}
      </Text>
      <Text sm class="text-gray-400">{{ imgInfo.detail }}</Text>
    </div>
  </div>
</template>

<script setup lang='ts'>
type horizontalPictureProps = {
  src: string
  hash: string
  alt: string
  date: string
  place: string
  detail?: string
  aspectRatio?: number
}

const imgInfo = defineProps<horizontalPictureProps>()
</script>
