<template>
  <div class="relative h-0" :style="`padding-bottom: ${props.aspectRatio}%`">
    <canvas class="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10" ref="canvas" width=32 height=32 />
  </div>
</template>

<script setup lang='ts'>
import { decode } from "blurhash"

const props = defineProps({
  hash: { type: String, default: "LVKmwwp{krRj8_xsg4Six]xtWCt6" },
  aspectRatio: { type: Number, default: 56.25 },
})

const pixels = decode(props.hash, 32, 32)
const canvas = ref<HTMLCanvasElement | null>(null)

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
