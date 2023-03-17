<template>
  <div class="relative flex flex-col justify-end pl-1 pb-1 w-100px h-100px text-white rounded-xl"
    :class="`bg-gradient-to-br ${props.fromColor} ${props.toColor}`">
    <div
      class="absolute top-0 left-0 w-100px h-100px -z-10 transform translate-x-0 translate-y-0 rotate-0 scale-90 rounded-xl transition-transform group-hover:(-rotate-15 -translate-y-1 -translate-x-3 scale-105)"
      :class="props.backColor">
    </div>
    <span class="font-bold text-5xl cursor-pointer">{{ props.abbr }}</span>
  </div>
</template>

<script setup lang='ts'>
type iconProps = {
  fromColor: string
  toColor: string
  backColor: string
  abbr: string
}

const props = defineProps<iconProps>()
</script>
