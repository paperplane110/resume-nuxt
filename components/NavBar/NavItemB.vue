<template>
  <NuxtLink :to="props.to">
    <div
      class="group w-12 h-12 flex-center rounded-1rem transition-all transform hover:(bg-gradient-to-br from-yellow-300 to-orange-400) active:(scale-95)"
      :class="activatedStyles">
      <font-awesome-icon :icon="`fa-solid ${props.icon} fa-lg`" class="text-xl group-hover:(text-white)" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
type props = {
  icon: string
  to: string
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
  @apply bg-gradient-to-br from-[#cad9ff] to-[#4f71d1] text-white;
}

.activate:hover {
  filter: contrast(120%);
}
</style>
