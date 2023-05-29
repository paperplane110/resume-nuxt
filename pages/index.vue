<template>
  <!-- <div class="container mx-auto"> -->
  <div class="pt-[18vh] flex flex-col">
    <div v-for="(link, idx) in heroLinks" :key="idx"
      class="group my-[-2rem] text-center transition transform duration-300 <md:(my-[-1.5rem])">
      <p class="block super-hero">
        <NuxtLink :to="link.to">
          {{ link.text }}<span class="filter transition-colors group-hover:(text-indigo-400 drop-shadow-indigo)">.
          </span>
        </NuxtLink>
      </p>
    </div>

    <!-- <NuxtLink class="group" to="/article">
      <p class="super-hero">Writing<span
          class="filter transition-colors group-hover:(text-indigo-500 drop-shadow-indigo)">.
        </span></p>
    </NuxtLink>
    <NuxtLink class="group" to="/gallery">
      <p class="super-hero">Art<span class="filter transition-colors group-hover:(text-red-500 drop-shadow-red)">.
        </span></p>
    </NuxtLink> -->

    <div class="z-10">
      <!-- <span class="text-base font-bold text-gray-400" :style="isTengel">{{ welcom }}</span> -->
      <p class="text-center text-gray-400">Welcome to <b class="text-gray-500">Tianyu's</b> blog</p>
      <div class="flex gap-4 justify-center">
        <div class="btn">
          <NuxtLink to="about">About me</NuxtLink>
        </div>
        <div class="btn">
          <NuxtLink to="components">Compts.</NuxtLink>
        </div>
        <NuxtLink to="game/gobang">
          <div class="btn">
            Game
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
  <!-- </div> -->
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

const heroLinks = [
  {
    text: "Code",
    to: "/projects",
  },
  {
    text: "Writing",
    to: "/article",
  },
  {
    text: "Art",
    to: "/gallery",
  }
]

</script>

<style scoped>
.container {
  height: 100%;
}

.about {
  box-shadow: 0 5 10 15 rgba(0, 0, 0, 0.445);
}

.drop-orange {
  filter: drop-shadow(0 0 0.75rem rgb(254, 89, 111))
}
</style>
