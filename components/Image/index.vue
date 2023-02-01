<template>
  <div class="relative" @click="Loaded">
    <ImageBlur class="absolute top-0 left-0 transition-opacity duration-500"
      :class="isLoaded ? 'opacity-0' : 'opacity-100'" :hash="props.hash" :aspect-ratio="props.aspectRatio" />
    <NuxtImg class="absolute top-0 left-0 transition-opacity duration-500" loading="lazy"
      :class="isLoaded ? 'opacity-100' : 'opacity-0'" :src="props.src" :alt="props.alt" @load="Loaded" />
  </div>
</template>

<script setup lang='ts'>

type imageProps = {
  src: string
  hash: string
  aspectRatio?: number
  alt?: string
}

const props = defineProps<imageProps>()

let isLoaded = ref(false)

function Loaded() {
  isLoaded.value = true
  console.log("img is loaded", isLoaded.value)
}

</script>
