<template>
  <Switch v-model="enabled" :class="enabled ? 'bg-gray-200 bg-opacity-30' : 'bg-gray-200'"
    class="relative inline-flex h-10 w-6 items-center rounded-full border border-gray-300 transition-color duration-500 hover:border-gray-500 dark:(border-gray-500 hover:border-gray-300)">
    <span class="sr-only">Enable notifications</span>
    <span :class="$colorMode.preference === 'dark' ? 'translate-y-2' : '-translate-y-2'"
      class="inline-block flex justify-center items-center ml-1px h-5 w-5 text-gray-500 transform rounded-full bg-white dark:bg-gray-800 transition">
      <Icon v-if="$colorMode.preference === 'dark'" name="fluent-emoji-flat:waxing-crescent-moon" />
      <Icon v-else name="fluent-emoji-flat:sun" />
    </span>
  </Switch>
</template>

<script setup lang='ts'>
import { Switch } from '@headlessui/vue'

const enabled = ref(false)
// color mode
const colorMode = useColorMode()
watch(enabled, () => {
  if (enabled.value) {
    colorMode.preference = "dark"
  } else {
    colorMode.preference = "light"
  }
})
</script>

