<template>
    <canvas class="absolute top-0 left-0 right-0 bottom-0 w-full h-full" ref="canvas" width=100 height=100 />
</template>

<script setup lang='ts'>

const canvas = ref(null)

onMounted(() => {
    const ctx = canvas.value.getContext("2d")
    // center point
    ctx.beginPath()
    ctx.arc(50, 50, 10, 0, 2 * Math.PI, 0)
    ctx.closePath()
    ctx.fill()

    // left line
    ctx.beginPath()
    ctx.moveTo(0, 50)
    ctx.lineTo(50, 50)
    ctx.closePath()
    ctx.stroke()

    // right line
    ctx.beginPath()
    ctx.moveTo(50, 50)
    ctx.lineTo(100, 50)
    ctx.closePath()
    ctx.stroke()

    // bottom line
    ctx.beginPath()
    ctx.moveTo(50, 50)
    ctx.lineTo(50, 100)
    ctx.closePath()
    ctx.stroke()
})
</script>