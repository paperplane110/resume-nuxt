<template>
  <div class="container mx-auto">
    <div class="welcome">
      <Text h1 :style="isTengel">{{ welcom }}</Text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
import { randomToWord } from '../utils/randomToWord'

const welcom = ref('Hello!đ')

const welcomList = [
  'Hello!đ',
  'äŊ åĨŊåīŧæå!đ',
  '5#t~C7T`V â¨',
  'Aloha!đ´',
  'ãããĢãĄã¯!đ',
  'Bonjour!đž',
  'Hallo!đģ',
  'ā¤¨ā¤Žā¤¸āĨā¤¤āĨđ',
]
let i = 1

setInterval(() => {
  const target = welcomList[i]
  randomToWord(welcom, target)
  if (i === welcomList.length - 1) i = 0
  else i++
}, 5000)

const isTengel = computed(() => {
  if (welcom.value.startsWith('5#t')) {
    return { fontFamily: 'Tengel' }
  } else return {}
})
</script>

<style scoped>
.container {
  height: 100%;
}

.welcome {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: grid;
  place-items: center;
  height: calc(100vh - 92px - 70px);
}

.about {
  box-shadow: 0 5 10 15 rgba(0, 0, 0, 0.445);
}
</style>
