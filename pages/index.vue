<template>
  <div class="h-full grid items-center">
    <div class="grid items-center justify-center gap-8 sm:(gap-4) lg:(gap-0)">

      <!-- Tianyu -->
      <div class="flex items-center -m-3 transform sm:(translate-x-15)">
        <div>
          <NuxtLink to="/about">
            <p class="text-7xl sm:text-8xl lg:text-9xl dark:text-white">Tianyu</p>
          </NuxtLink>
        </div>
        <div>
          <p class="text-xl pt-3 pl-2 sm:(text-2xl pt-3 pl-2) lg:(text-4xl pt-4 pl-4) leading-none text-gray-600">
            is a {{ width > 1024 ? role : "foodie"  }},<br /> who can code
          </p>
        </div>
      </div>

      <!-- Projects -->
      <div class="flex items-center gap-4 -m-3 transform lg:(-translate-x-10)">
        <div v-show="width > 1024" class="grid gap-4 grid-cols-4">
          <NuxtLink
            v-for="(info, idx) in projectList"
            :key="idx"
            :to="info.link"
          >
            <div
              class="grid items-center justify-center w-80px h-80px rounded-4xl text-3xl bg-gradient-to-tr text-white dark:border-white select-none filter blur-md transition-all hover:(blur-0 opacity-100)"
              :class="`bg-gradient-to-br ${info.fromColor} ${info.toColor}`"
            >
              {{ info.abbr }}
            </div>
          </NuxtLink>
        </div>
        <div v-show="width<=1024" class="w-60px h-60px sm:(w-80px h-80px) rounded-1 bg-gradient-to-tr from-orange-300 to-rose-400 filter blur-md transition-all hover:(blur-sm)"></div>
        <NuxtLink to="/projects">
          <p class="text-7xl sm:text-8xl lg:text-9xl dark:text-white">Projects</p>
        </NuxtLink>
      </div>

      <!-- Articles -->
      <div class="flex items-center gap-4 -m-3 transform sm:(translate-x-5)">
        <NuxtLink to="/articles">
          <p class="text-7xl sm:text-8xl lg:text-9xl dark:text-white">Articles</p>
        </NuxtLink>
        <div v-show="width > 1024" class="flex gap-4 items-center">
          <div class="w-100px h-100px rounded-1 bg-gradient-to-tl from-orange-300 to-rose-400 filter blur-md transition-all hover:(blur-sm)"></div>
          <div class="w-75px h-100px rounded-1 bg-gradient-to-l from-lime-300 to-green-400 filter blur-md transition-all hover:(blur-sm)"></div>
          <div class="w-50px h-100px rounded-1 bg-gradient-to-bl from-pink-300 to-purple-400 filter blur-md transition-all hover:(blur-sm)"></div>
        </div>
        <div v-show="width<=1024" class="w-80px h-80px rounded-1 bg-gradient-to-br from-lime-300 to-sky-400 filter blur-md transition-all hover:(blur-sm)"></div>
      </div>

      <!-- Arts -->
      <div class="flex items-center gap-4 -m-3 transform translate-x-10 sm:(translate-x-20)">
        <div v-show="width > 1024" class="w-50px h-100px rounded-1 bg-gradient-to-tr from-orange-300 to-rose-400 filter blur-md transition-all hover:(blur-sm)"></div>
        <div v-show="width > 1024" class="w-75px h-100px rounded-1 bg-gradient-to-br from-lime-300 to-sky-400 filter blur-md transition-all hover:(blur-sm)"></div>
        <div class="w-100px h-100px rounded-1 bg-gradient-to-br from-sky-300 to-purple-400 filter blur-md transition-all hover:(blur-sm)"></div>
        <NuxtLink to="/gallery">
          <p class="text-7xl sm:text-8xl lg:text-9xl dark:text-white">Arts</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { randomToWord } from '~~/utils/randomToWord'

const { width, height } = useWindowSize()
const role = ref('foodie 🍱')
const roleList = [
  'foodie 🍱',
  'violinist 🎵',
  'gamer 🎮',
  'bookworm🐛',
  'traveler 🧗'
]
const projectList = [
  {
    fromColor: 'from-orange-300',
    toColor: 'to-red-700',
    backColor: 'bg-orange-200/70',
    abbr: 'Ft',
    name: 'Focus Timer',
    description: 'A tomato timer inspired by Simonheys\' wordclock',
    start: '2023.08',
    end: '2023.11',
    link: 'https://focustimer.pages.dev/'
  },
  {
    fromColor: 'from-pink-300',
    toColor: 'to-purple-700',
    backColor: 'bg-pink-200/70',
    abbr: 'Sd',
    name: 'Stable Diffusion Art',
    description: 'Created artworks with stable diffusion',
    start: '2023.07',
    end: 'now',
    link: 'gallery/'
  },
  {
    fromColor: 'from-lime-400',
    toColor: 'to-green-500',
    backColor: 'bg-lime-300/70',
    abbr: 'Ba',
    name: 'Badges',
    description: '设定目标，收获徽章，让生活充满正反馈',
    start: '2023.02',
    end: 'now',
    link: 'https://badges-fe.pages.dev/'
  },
  {
    fromColor: 'from-gray-400',
    toColor: 'to-gray-800',
    backColor: 'bg-gray-300/70',
    abbr: 'Ki',
    name: 'Kilo',
    description: '使用 C 语言编写的极简文本编辑器',
    start: "2022.12",
    end: "2023.01",
    link: "https://github.com/paperplane110/kilo-text-editor",
  },
]

let i = 1

onMounted(() => {
  setInterval(() => {
  const target = roleList[i]
  randomToWord(role, target)
  if (i === roleList.length - 1) i = 0
  else i++
}, 5000)
})

</script>

<style scoped>
.container {
  height: 100%;
}

.about {
  box-shadow: 0 5 10 15 rgba(0, 0, 0, 0.445);
}

.hero {
  font-size: 150px;
  font-weight: bold;
}

</style>
