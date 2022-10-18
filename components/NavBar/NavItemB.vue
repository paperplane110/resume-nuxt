<template>
  <NuxtLink :to="props.to">
    <div
      class="w-12 h-12 flex justify-center items-center border border-indigo-300 rounded-1rem hover:(bg-indigo-400)"
    >
      <span class="material-icons-outlined hover:(text-white)">{{
        props.icon
      }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
type props = {
  icon: string
  to: string
}

const props = defineProps<props>()
</script>
