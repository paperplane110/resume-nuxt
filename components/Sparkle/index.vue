<template>
    <span class="wrapper">
        <SparkleInstance v-for="sparkle in sparkleList" :key="sparkle.id" :color="sparkle.color" :size="sparkle.size"
            :style="sparkle.style" />
        <slot></slot>
    </span>
</template>
  
<script setup lang="ts">
import { reactive } from 'vue'
import { getUid } from '../../utils/getUid'
import SparkleInstance from './SparkleInstance.vue'

type sparklesProps = {
    color?: string
    rainbow?: boolean
}

const props = defineProps<sparklesProps>()

const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)'

const generateSparkle = (color = DEFAULT_COLOR) => {
    return {
        id: getUid(),
        createdAt: Date.now(),
        color,
        size: random(10, 20),
        style: {
            top: random(0, 50) + '%',
            left: random(0, 100) + '%',
            zIndex: 2,
        },
    }
}

let sparkleList = reactive([generateSparkle()])

const regenerate = () => {
    if (sparkleList.length > 3) sparkleList.shift()
    if (props.color) {
        sparkleList.push(generateSparkle(props.color))
    } else if (props.rainbow) {
        const num = random(0, 360)
        const randomColor = `hsl(${num}deg, 100%, 75%)`
        sparkleList.push(generateSparkle(randomColor))
    } else {
        sparkleList.push(generateSparkle())
    }
}

const setRandomInterval = (
    func: TimerHandler,
    minInterval: number,
    maxInterval: number
) => {
    const randomRange = maxInterval - minInterval
    setInterval(() => {
        const randomDelay = random(0, randomRange)
        setTimeout(func, randomDelay)
    }, minInterval)
}

// setInterval(regenerate, 400)
setRandomInterval(regenerate, 400, 1000)
</script>
  
<style scoped>
.wrapper {
    position: relative;
    display: inline-block;
    font-weight: 600;
}

.child-wrapper {
    position: relative;
    z-index: 1;
    font-weight: bold;
    color: hsl(200deg, 100%, 50%);
}
</style>