<template>
  <div class="grid grid-cols-4 mt-6">
    <div class="flex flex-col justify-center">
      <div class="mt-2 mr-5 pr-2 border-r-black border-r-2 text-right dark:(border-l-gray-500 text-gray-300) ">
        <Text sm>
          {{ imgInfo.date }}
        </Text>
        <Text sm><b>{{ imgInfo.alt }}</b></Text>
        <Text sm>{{ imgInfo.place }}</Text>
        <Text sm class="text-gray-400">{{ imgInfo.detail }}</Text>
      </div>
    </div>
    <div class="col-start-2 col-end-5 rounded-2rem overflow-hidden">
      <Image v-bind="imgInfo" />
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
