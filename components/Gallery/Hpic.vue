<template>
  <div class="mt-6 text-right">
    <div class="rounded-2rem overflow-hidden">
      <img :src="imgInfo.src" :alt="imgInfo.alt" />
    </div>
    <div class="flex-1 mt-2">
      <Text sm>
        {{ imgInfo.date }} / <b>{{ imgInfo.alt }}</b> / {{ imgInfo.place }}
      </Text>
      <Text sm class="text-gray-400">{{ imgInfo.detail }}</Text>
    </div>
  </div>
</template>

<script setup lang='ts'>
type horizontalPictureProps = {
  src: string
  alt: string
  date: string
  place: string
  detail?: string
}

const imgInfo = defineProps<horizontalPictureProps>()
</script>
