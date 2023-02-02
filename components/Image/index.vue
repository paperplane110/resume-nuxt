<template>
  <div ref="wrapper" class="relative" @click="Loaded">
    <ImageBlur class="absolute top-0 left-0 transition-opacity duration-500"
      :class="isLoaded ? 'opacity-0' : 'opacity-100'" :hash="props.hash" :aspect-ratio="props.aspectRatio" />
    <img ref="image" class="absolute top-0 left-0 transition-opacity duration-500"
      :class="isLoaded ? 'opacity-100' : 'opacity-0'" :alt="props.alt" />
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

const wrapper = ref<HTMLDivElement>()
const image = ref<HTMLImageElement>()
let isLoaded = ref(false)

function Loaded() {
  image.value.src = props.src
  isLoaded.value = true
  console.log("img is loaded", isLoaded.value)
}

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      Loaded()
    }
  })
  observer.observe(wrapper.value)
})

onUnmounted(() => {
  observer.disconnect()
})

</script>
