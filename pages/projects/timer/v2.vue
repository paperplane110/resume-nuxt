<template>
<div class="flex flex-col w-full h-full">

  <div class="absolute left-[10vw] top-[10vh] border px-8 py-4">
    <Text h2>Console</Text>
    <Text h4>Timer state</Text>
    <Text>isCounting:     {{ isCounting }}</Text>
    <Text>isPause:        {{ isPause }}</Text>
    <br />
    <Text h4>Timestamps & Elapse</Text>
    <Text>startTimeStamp: {{ startTimeStamp }}</Text>
    <Text>pauseTimeStamp: {{ pauseTimeStamp }}</Text>
    <Text>dt:             {{ dt }}</Text>
    <Text>elapse ms:      {{ elapseMs }}</Text>
    <Text>elapse sec:      {{ elapseSec }}</Text>
    <Text>elapse min:      {{ elapseMin }}</Text>
    <Text>accumulate sec:      {{ accumSec }}</Text>
    <Text>accumulate min:      {{ accumMin }}</Text>
    <br />
  </div>

  <!-- Knob -->
  <div class="absolute z-10 left-[50vw] top-[50vh] flex-col flex-center border rounded-1 w-200px h-200px transform -translate-x-[50%] -translate-y-[50%]">
    <Text class="text-gray-400">{{ formatCountdown().min }}:{{ formatCountdown().sec }}</Text>
      <div class="flex">
        <button
          class="w-12 h-12 flex-center rounded-1 text-gray-400 transition-colors hover:(text-gray-600 dark:text-gray-200) disabled:(text-gray-400 cursor-not-allowed)"
          @click="startTimer">
          <Icon name="fa6-solid:play" class="text-xl dark:text-600" />
        </button>
        <button
          class="w-12 h-12 flex-center rounded-1 text-gray-400 transition-colors hover:(text-gray-600 dark:text-gray-200) disabled:(text-gray-400 cursor-not-allowed)"
          @click="pauseTimer"
          :disabled="isPause || !isCounting"
          >
          <Icon name="fa6-solid:pause" class="text-xl dark:text-600" />
        </button>
        <button
          class="w-12 h-12 flex-center rounded-1 text-gray-400 transition-colors hover:(text-gray-600 dark:text-gray-200) disabled:(text-gray-400 cursor-not-allowed)"
          @click="resetTimer"
          :disabled="!isCounting"
        >
          <Icon name="fa6-solid:rotate-left" class="text-xl dark:text-600" />
        </button>
      </div>
  </div>

  <!-- Minute -->
  <div ref="minDial" class="absolute -z-10 left-[50vw] top-[50vh] w-100px h-100px transform -translate-x-[50%] -translate-y-[50%]">
    <div
      v-for="(num, idx) in zeroToSixty.slice(0, 25)"
      :key="idx"
      class="absolute left-[50%] top-[50%] w-60 text-gray-300 text-right transition transform -translate-y-[50%] origin-left rotate-6"
      :class="isMinuteDivActive(idx) ? 'font-bold text-black dark:text-gray-200' : 'text-gray-200 dark:text-gray-600'"
      :style="`--tw-rotate: ${idx * (360/25)}deg`"
    >
      {{ num }}
    </div>
  </div>
  <div class="absolute left-[50vw] top-[50vh] w-100px h-100px transform -translate-x-[50%] -translate-y-[50%]">
    <div  class="relative left-[320%] top-[50%] transform -translate-y-[50%]">{{ lang === "en" ? "minute" : "分鐘"}}</div>
  </div>

  <!-- Second -->
  <div ref="secDial" class="absolute -z-10 left-[50vw] top-[50vh] w-100px h-100px transform -translate-x-[50%] -translate-y-[50%]">
    <div
      v-for="(num, idx) in zeroToSixty"
      :key="idx"
      class="absolute left-[50%] top-[50%] w-105 text-gray-300 text-right transition transform -translate-y-[50%] origin-left rotate-6"
      :class="isSecondDivAcitve(idx) ? 'font-bold text-black dark:text-gray-200' : 'text-gray-200 dark:text-gray-600'"
      :style="`--tw-rotate: ${idx * 6}deg`"
    >
      {{ num }}
    </div>
  </div>
  <div class="absolute left-[50vw] top-[50vh] w-100px h-100px transform -translate-x-[50%] -translate-y-[50%]">
    <div  class="relative left-[500%] top-[50%] transform -translate-y-[50%]">{{ lang === "en" ? "second" : "秒鐘"}}</div>
  </div>
</div>
</template>

<script setup lang='ts'>
import { gsap } from "gsap"

// Tomatos
const TOMATO = 25
const tomatoNum = ref(1)
const totalMs = TOMATO * tomatoNum.value * 60 * 1000

// Dial Array
const lang = ref("en")
const zeroToSixty = computed(() => {
  if (lang.value == "en") {
    return [
      "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
      "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
      "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine",
      "thirty", "thirty-one", "thirty-two", "thirty-hree", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine",
      "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine",
      "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine",
    ]
  } else {
    return [
      "零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖",
      "壹拾", "拾壹", "拾贰", "拾叁", "拾肆", "拾伍", "拾陆", "拾柒", "拾捌", "拾玖",
      "贰拾", "贰拾壹", "贰拾贰","贰拾叁", "贰拾肆", "贰拾伍", "贰拾陆", "贰拾柒", "贰拾捌", "贰拾玖",
      "叁拾", "叁拾壹", "叁拾贰","叁拾叁", "叁拾肆", "叁拾伍", "叁拾陆", "叁拾柒", "叁拾捌", "叁拾玖",
      "肆拾", "肆拾壹", "肆拾贰","肆拾叁", "肆拾肆", "肆拾伍", "肆拾陆", "肆拾柒", "肆拾捌", "肆拾玖",
      "伍拾", "伍拾壹", "伍拾贰","伍拾叁", "伍拾肆", "伍拾伍", "伍拾陆", "伍拾柒", "伍拾捌", "伍拾玖",
    ]
  }
})

// Dial ref and degrees
const minDial = ref()
const minDeg = 6
const min25Deg = 360 / 25
const secDial = ref()
const secDeg = 6

// timer state
const isCounting = ref(false)
const isPause = ref(false)
const isTomato = ref(false)

// Time
const nowTimeStamp = ref(0)
const pauseTimeStamp = ref(0)
const dt = ref(0) // to store the delta time while the timer has been paused
const startTimeStamp = ref(0)

const elapseMs = ref(0)
const elapseSec = ref(0)
const elapseMin = ref(0)
const accumSec = ref(0)
const accumMin = ref(0)
let lastAccumSec = ref(0)
let lastAccumMin = ref(0)


// Update elapse time
const checkOverFlow = () => {
  if (totalMs < elapseMs.value) {
    elapseMs.value = totalMs
    isTomato.value = true
    pauseTimer()
  }
}

const updateElapse = watch(nowTimeStamp, () => {
  checkOverFlow()
  if (isCounting.value && !isPause.value) {
    elapseMs.value = nowTimeStamp.value - startTimeStamp.value - dt.value
  }
})

watch(elapseMs, () => {
  elapseSec.value = Math.ceil(elapseMs.value/1000) % 60
  elapseMin.value = Math.ceil(elapseMs.value/1000/60)
  accumSec.value = Math.ceil(elapseMs.value/1000)
  accumMin.value = Math.ceil(elapseMs.value/1000/60)

  let dSec, dMin
  let ease = "back.out(1.3)"
  if (elapseMs.value < lastAccumSec.value) {
    // when reset the timer, rotating longer
    dSec = (lastAccumSec.value * secDeg) / 360 * 3
    dMin = (lastAccumMin.value * min25Deg) / 360 * 2
    ease = "power3.inOut"
  } else {
    dSec = 0.2
    dMin = 0.2
  }

  rDial(secDial, secDeg, accumSec.value, dSec, ease)
  rDial(minDial, min25Deg, accumMin.value, dSec, ease)
  lastAccumSec.value = accumSec.value
  lastAccumMin.value = accumMin.value
})

const rDial = (dialRef: Ref, per: number, accum: number, d: number, ease = "power1.out")  => {
  gsap.to(dialRef.value, {
    rotation: per * accum,
    duration: d,
    ease: ease,
  })
}

const isSecondDivAcitve = (idx: number) => (elapseSec.value === 0) ? idx === 0 : idx === (60-elapseSec.value)
const isMinuteDivActive = (idx: number) => (elapseMin.value === 0) ? idx === 0 : idx === (25-elapseMin.value)

// Timer Functions
const startTimer = () => {
  // time is stopped, start counting
  if (!isCounting.value) {
    startTimeStamp.value = nowTimeStamp.value
  }

  // timer is paused, need continue
  if (isPause.value) {
    dt.value += nowTimeStamp.value - pauseTimeStamp.value
    pauseTimeStamp.value = 0
    isPause.value = false
  }

  isCounting.value = true
}

const pauseTimer = () => {
  isPause.value = true
  pauseTimeStamp.value = nowTimeStamp.value
}

const resetTimer = () => {
  if (!isPause.value) {
    pauseTimer()
  }
  // wait for the last tick
  setTimeout(() => {
      startTimeStamp.value = 0
      pauseTimeStamp.value = 0
      isPause.value = false
      isCounting.value = false
      dt.value = 0
      elapseMs.value = 0
    }, 200)
}

const formatCountdown = () => {
  const countdown = (totalMs - elapseMs.value) / 1000
  const min = Math.floor(countdown / 60)
  const sec = Math.ceil(countdown % 60)
  return {
    min: min >= 10 ? min.toString() : "0" + min.toString(),
    sec: sec >= 10 ? sec.toString() : "0" + sec.toString(),
  }
}


onMounted(() => {
  const timer = setInterval(() => {
    nowTimeStamp.value = Date.now() * 1
  }, 100)
})
</script>

<style scoped>

</style>
