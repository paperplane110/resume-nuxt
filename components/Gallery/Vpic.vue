<template>
  <div class="group flex items-center gap-4 mt-6">
    <div
      class="flex-[0.7] <md:(flex-1) rounded-2rem overflow-hidden max-h-[100px] filter blur-sm transition-all duration-500 transform group-hover:(max-h-[1500px] filter-none)">
      <img v-bind="imgInfo" />
    </div>
    <div class="flex flex-col justify-between">
      <div class="mt-2 pl-2 border-l-black border-l-2 dark:(border-l-gray-500 text-gray-300) ">
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
  alt: string
  date: string
  place: string
  detail?: string
}

const imgInfo = defineProps<horizontalPictureProps>()
</script>

<style scope></style>
