<template>
  <div>
    <NuxtLink :to="props.link" target="_blank">
      <ProjectIcon v-bind="props" />
    </NuxtLink>
    <div>
      <span class="text-3xl font-bold">{{ props.name }}</span>
      <Text base>{{ props.description }}</Text>
      <Text base class="code-family text-gray-400">{{ props.start }}-{{ props.end }}</Text>
    </div>
  </div>
</template>

<script setup lang='ts'>
type briefProps = {
  // icon
  fromColor: string
  toColor: string
  backColor: string
  abbr: string

  // description
  name: string
  description: string
  start: string
  end: string
  link: string
}

const props = defineProps<briefProps>()
</script>
