<template>
  <div ref="wrapper" class="relative">
    <ImageBlur class="absolute top-0 left-0 transition-opacity duration-500"
      :class="isLoaded ? 'opacity-0' : 'opacity-100'" :hash="props.hash" :aspect-ratio="props.aspectRatio" />
    <img ref="image" class="absolute top-0 left-0 transition-opacity duration-500"
      :class="isLoaded ? 'opacity-100' : 'opacity-0'" :alt="props.alt" @load="Loaded" />
  </div>
</template>

<script setup lang='ts'>
// Define props
type imageProps = {
  src: string
  hash: string
  aspectRatio?: number
  alt?: string
}

const props = defineProps<imageProps>()

// Whether img is loaded
let isLoaded = ref(false)

function Loaded() {
  isLoaded.value = true
}

// Image lazy loading
const wrapper = ref<HTMLDivElement>()
const image = ref<HTMLImageElement>()

function Entered() {
  image.value.src = props.src
}

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      Entered()
    }
  })
  observer.observe(wrapper.value)
})

onUnmounted(() => {
  observer.disconnect()
})

</script>
