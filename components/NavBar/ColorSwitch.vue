<template>
  <div @click="changeColorMode"
    class="group w-12 h-12 flex-center rounded-1rem transition-colors hover:(bg-gradient-to-br from-yellow-300 to-orange-400)">
    <div v-if="$colorMode.preference === 'dark'">
      <font-awesome-icon :icon="`fa-solid fa-sun fa-lg`" class="text-xl group-hover:(text-white)" />
    </div>
    <div v-else>
      <font-awesome-icon :icon="`fa-solid fa-moon fa-lg`" class="text-xl group-hover:(text-white)" />
    </div>
  </div>
</template>

<script setup lang='ts'>
// color mode
const colorMode = useColorMode()
const changeColorMode = () => {
  if (colorMode.value === "dark") {
    colorMode.preference = "light"
  } else if (colorMode.value === "light") {
    colorMode.preference = "dark"
  } else {
    // colorMode is system
    colorMode.preference = "light"
  }
}
</script>

