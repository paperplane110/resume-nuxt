<template>
  <div ref="wrapper" class="flex justify-center items-center bg-center bg-no-repeat bg-cover">
    <ImageBlur class="min-w-full min-h-full object-cover transition-opacity duration-500" :hash="props.hash"
      :class="onLoaded ? 'opacity-0' : 'opacity-100'" />
  </div>
</template>

<script setup lang='ts'>

const props = defineProps<{
  src: string
  hash: string
}>()

const wrapper = ref<HTMLDivElement | null>(null)
const onLoaded = ref(false)

onMounted(() => {
  if (!wrapper.value) {
    return;
  }
  // Load the bg-image as Image firstly
  const bgImage = new Image()
  bgImage.src = props.src

  // when image full loaded, pass it to bg-image
  bgImage.onload = () => {
    wrapper.value.style.backgroundImage = `url(${props.src})`
    onLoaded.value = true
  }
})

</script>
