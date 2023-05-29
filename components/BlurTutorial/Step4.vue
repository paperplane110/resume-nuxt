<template>
  <div class="flex justify-center">
    <div ref="wrapper" class="container">
      <ImageBlur class="blur" :hash="props.hash" :class="onLoaded ? 'opacity-0' : 'opacity-100'" />
    </div>
  </div>
</template>

<script setup lang='ts'>

const props = defineProps<{
  src: string
  hash: string
}>()

const wrapper = ref(null)
const onLoaded = ref(false)

onMounted(() => {
  // Load the bg-image as Image firstly
  const bgImage = new Image()
  bgImage.src = props.src
  bgImage.onload = () => {
    // when image full loaded, pass it to bg-image
    wrapper.value.style.backgroundImage = `url(${props.src})`
    onLoaded.value = true
  }
})
</script>

<style scoped>
.container {
  display: flex;
  position: relative;
  width: 600px;
  height: 400px;
  border-radius: 2rem;
  overflow: hidden;
  background-image: url(/img/articles/9_blur/blur_cover.jpg);
  background-position: center;
  background-size: cover;
}

.blur {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  transition: opacity 500ms;
}

.blur:hover {
  opacity: 100;
}
</style>

