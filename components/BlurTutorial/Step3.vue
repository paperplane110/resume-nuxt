<template>
  <div class="flex justify-center">
    <div class="w-300px h-200px">
      <div class="wrapper" :style="`padding-bottom: ${props.aspectRatio}%`">
        <canvas class="canvas" ref="canvas" width=32 height=32 />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { decode } from "blurhash"

// define the props of this component
const props = defineProps({
  // hash: the blurhash string from Blurhash, with default value "LVKmwwp{krRj8_xsg4Six]xtWCt6"
  hash: { type: String, default: "LIA_9M%3L~-.yYRO8{OGuPX8ITo#" },
  // aspect ratio: height/width * 100
  aspectRatio: { type: Number, default: 56.25 },
})

// use ref to get the canvase element
const canvas = ref<HTMLCanvasElement | null>(null)
const pixels = decode(props.hash, 32, 32)

onMounted(() => {
  if (!canvas.value) {
    // ensure to get the ref of the canvase element
    console.log("Canvase is not ready")
    return;
  }
  const ctx = canvas.value.getContext("2d")
  if (ctx) {
    // ensure ctx is not null
    const imageData = ctx.createImageData(32, 32)
    imageData.data.set(pixels)
    ctx.putImageData(imageData, 0, 0)
  }
})
</script>

<style scoped>
.wrapper {
  position: relative;
  height: 0;
}

.canvas {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>
