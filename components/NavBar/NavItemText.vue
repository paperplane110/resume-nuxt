<template>
  <NuxtLink :to="props.to">
    <div class="group px-3 py-2 rounded-0.5rem transition-all transform hover:(bg-light-600) dark:hover:(bg-gray-600)"
      :class="activatedStyles">
      {{ text }}
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
type props = {
  to: string
  text: string
  activated: string
}

const props = defineProps<props>()

const activatedStyles = computed(() => {
  if (props.to === props.activated) {
    return "activate"
  } else return ""
})
</script>

<style scoped>
.activate {
  /* @apply bg-gradient-to-br from-gray-200 to-gray-500 text-white; */
  @apply bg-light-600;
}

.dark .activate {
  @apply bg-gray-600;
}

.activate:hover {
  @apply bg-light-700;
}

.dark .activate:hover {
  @apply bg-gray-500;
}
</style>
