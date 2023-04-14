<template>
  <div class="container mx-auto">
    <div class="welcome">
      <NuxtLink class="group" to="/projects">
        <p class="super-bold">
          Code<span class="filter transition-colors group-hover:(text-orange-400 drop-shadow-orange)">.
          </span>
        </p>
      </NuxtLink>
      <NuxtLink class="group" to="/article">
        <p class="super-bold">Writing<span
            class="filter transition-colors group-hover:(text-indigo-500 drop-shadow-indigo)">.
          </span></p>
      </NuxtLink>
      <NuxtLink class="group" to="/gallery">
        <p class="super-bold">Art<span class="filter transition-colors group-hover:(text-red-500 drop-shadow-red)">.
          </span></p>
      </NuxtLink>
      <div>
        <!-- <span class="text-base font-bold text-gray-400" :style="isTengel">{{ welcom }}</span> -->
        <p class="text-base text-gray-400">Welcome to <b class="text-gray-500">Tianyu's</b> blog</p>
        <div class="grid grid-cols-3 gap-4">
          <button class="btn">
            <NuxtLink to="about">About me</NuxtLink>
          </button>
          <button class="btn">
            <NuxtLink to="components">Compts.</NuxtLink>
          </button>
          <button class="btn">
            <NuxtLink to="game/gobang">Game</NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
import { randomToWord } from '~~/utils/randomToWord'

const welcom = ref('Hello!👋')
const welcomList = [
  'Hello!👋',
  '你好啊，朋友!👏',
  '5#t~C7T`V ✨',
  'Aloha!🌴',
  'こんにちは!🙌',
  'Bonjour!🍾',
  'Hallo!🍻',
  'नमस्ते🙏',
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 92px - 70px);
}

.super-bold {
  margin-top: -3rem;
  font-size: 12rem;
  font-weight: bold;
  line-height: 100%;
}

.about {
  box-shadow: 0 5 10 15 rgba(0, 0, 0, 0.445);
}

.drop-orange {
  filter: drop-shadow(0 0 0.75rem rgb(254, 89, 111))
}
</style>
