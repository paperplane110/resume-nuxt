<template>
  <canvas class="absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-1" ref="canvas" width=100 height=100 />
</template>

<script setup lang='ts'>
const canvas = ref(null)

onMounted(() => {
  const ctx = canvas.value.getContext("2d")
  // center point
  ctx.lineWidth = 5
  ctx.beginPath()
  ctx.arc(50, 50, 20, 0, 2 * Math.PI, 0)
  ctx.closePath()
  ctx.stroke()
})
</script>