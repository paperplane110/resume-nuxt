<template>
  <div class="grid grid-cols-4 mt-6">
    <div class="col-start-1 col-end-4 rounded-2rem overflow-hidden">
      <Image v-bind="imgInfo" />
    </div>
    <div class="flex flex-col justify-center">
      <div class="mt-2 ml-5 pl-2 border-l-black border-l-2 dark:(border-l-gray-500 text-gray-300) ">
        <Text sm>
          {{ imgInfo.date }}
        </Text>
        <Text sm><b>{{ imgInfo.alt }}</b></Text>
        <Text sm>{{ imgInfo.place }}</Text>
        <Text sm class="text-gray-400">{{ imgInfo.detail }}</Text>
      </div>
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
