<template>
  <div class="w-full relative text-center">
    <Text hero>Timer</Text>

    <div class="screen-left z-20 flex-center flex-col w-200px h-200px border rounded-1 shadow transition hover:(shadow-nmd)">
      <Text class="text-gray-400">{{ formatCountdown().min }}:{{ formatCountdown().sec }}</Text>
      <div class="flex">
        <button class="w-12 h-12 flex-center rounded-1 text-gray-400 transition-colors hover:(text-gray-600 dark:text-gray-200)" @click="startTimer">
          <Icon name="fa6-solid:play" class="text-xl dark:text-600" />
        </button>
        <button class="w-12 h-12 flex-center rounded-1 text-gray-400 transition-colors hover:(text-gray-600 dark:text-gray-200)" @click="pauseTimer">
          <Icon name="fa6-solid:pause" class="text-xl dark:text-600" />
        </button>
        <button class="w-12 h-12 flex-center rounded-1 text-gray-400 transition-colors hover:(text-gray-600 dark:text-gray-200)" @click="resetTimer">
          <Icon name="fa6-solid:rotate-left" class="text-xl dark:text-600" />
        </button>
      </div>
    </div>
    <div id="timer-plate" class="rotate-center -z-10">
      <div id="second-pointers"
        class="relative transform origin-left h-1.6rem transition ease-in-out"
        :class="isReset() ? 'duration-2500' : 'duration'"
        :style="`--tw-rotate: ${elapseSecond * 6}deg`"
      >
        <div v-for="(num, idx) in zeroToSixty" :key="idx"
          class="absolute w-500px text-right text-gray-200 transform origin-left transition"
          :class="isSecondDivAcitve(idx) ? 'text-black dark:text-gray-200' : 'text-gray-200 dark:text-gray-600'"
          :style="`--tw-rotate: ${idx * 6}deg`"
        >
          {{ num }}
        </div>
      </div>

      <div id="second-text"
        class="absolute top-0 left-0 pl-520px font-bold"
      >
        {{ (second>1) ? 'seconds' : 'second'}}
      </div>

      <div id="minite-pointers"
        class="absolute top-0 left-0 transform origin-left h-1.6rem transition ease-in-out"
        :class="isReset() ? 'duration-2500' : 'duration'"
        :style="`--tw-rotate: ${minite * -13.846}deg`"
      >
        <div v-for="(num, idx) in zeroToSixty.slice(0,26)" :key="idx"
          class="absolute w-300px text-right text-gray-200 transform origin-left transition"
          :class="isMiniteDivActive(idx) ? 'text-black dark:text-gray-200' : 'text-gray-200 dark:text-gray-600'"
          :style="`--tw-rotate: ${idx * 13.846}deg`"
        >
          {{ num }}
        </div>
      </div>

      <div id="minite-text"
        class="absolute top-0 left-0 pl-320px font-bold"
      >
        {{ (minite>1) ? 'minites' : 'minite'}}
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
const TOMATO = 25*60
const zeroToSixty = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "forteen", "fifteen", "sixteen", "seventeen", "eighteen", "ninteen",
  "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine",
  "thirty", "thirty-one", "thirty-two", "thirty-hree", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine",
  "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine",
  "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine",
]

const countdown = ref(TOMATO)
const pause = ref(true)
const elapseSecond = ref(0)

const getMinSec = (countdown: number) => {
  const min = Math.floor(countdown / 60)
  const sec = countdown % 60
  return {min, sec}
}

const minite = computed(() => {
  return getMinSec(countdown.value).min
})

const second = computed(() => {
  return getMinSec(countdown.value).sec
})

const formatCountdown = () => {
  return {
    min: minite.value >= 10 ? minite.value.toString() : "0" + minite.value.toString(),
    sec: second.value >= 10 ? second.value.toString() : "0" + second.value.toString(),
  }
}

// button callback
const startTimer = () => {
  pause.value = false
}

const resetTimer = () => {
  pause.value = true
  countdown.value = TOMATO
  elapseSecond.value = 0
}

const pauseTimer = () => {
  if (!pause.value) pause.value = true
}


// dynamic style
const isSecondDivAcitve = (idx: number) => idx == second.value
const isMiniteDivActive = (idx: number) => idx == minite.value
const isReset = () => pause.value


onMounted(() => {
  const timer = setInterval(() => {
  // check zero
  if (countdown.value <= 0) pause.value = true

  // whether pause
  if (!pause.value) {
    countdown.value -= 1
    elapseSecond.value += 1
  }
}, 1000)
})


</script>

<style scoped>
.screen-left {
  position: absolute;
  top: calc(50vh - 100px);
  left: 0;
}

.rotate-center {
  position: absolute;
  top: calc(50vh - 1rem);
  left: calc(0rem + 100px);
}
</style>
