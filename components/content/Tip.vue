<template>
  <div class="my-6 px-4 py-3 border rounded-2xl" :class="[type]">
    <Text b>{{ symbol }}{{ title ? title : type?.toUpperCase() }}</Text>
    <Text base>
      <ContentSlot :use="$slots.default" unwrap="p" />
    </Text>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps({
  type: {
    type: String
  },
  title: {
    type: String
  }
})

const symbol = computed(() => {
  if (props.type === "tip") return "✨"
  else if (props.type === "info") return "💡"
  else if (props.type === "warning") return "⚠️"
  else if (props.type === "error") return "❗️"
})
</script>

<style scoped>
.tip {
  @apply bg-green-100 border-green-200 text-green-500;
}

.info {
  @apply bg-blue-100 border-blue-200 text-blue-500;
}

.warning {
  @apply bg-amber-100 border-amber-200 text-amber-500;
}

.error {
  @apply bg-red-100 border-red-200 text-red-500;
}

.dark .tip {
  @apply bg-green-900 border-green-500 text-green-400 bg-opacity-50;
}

.dark .info {
  @apply bg-blue-900 border-blue-500 text-blue-400 bg-opacity-50;
}

.dark .warning {
  @apply bg-amber-900 border-amber-500 text-amber-400 bg-opacity-50;
}

.dark .error {
  @apply bg-red-900 border-red-500 text-red-400 bg-opacity-50;
}
</style>
