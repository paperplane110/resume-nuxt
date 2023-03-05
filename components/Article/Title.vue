<template>
  <div>
    <Description :src="props.cover" reverse :textSize="1.5">
      <div>
        <Text hero>{{ props.title }}</Text>
        <div class="flex gap-4">
          <Text base class="text-gray-700 code-family">{{ props.date }}</Text>
          <Text base class="text-gray-400">{{ props.description }}</Text>
        </div>

        <!-- Tag -->
        <div v-if="props.tags" class="py-4 flex gap-2">
          <div v-for="(tag, idx) in props.tags" :key="idx"
            class="px-0.3rem rounded-0.5rem bg-slate-500 text-white code-family">
            <Text sm>{{ tag }}</Text>
          </div>
        </div>

        <!-- Cover Image -->
        <div v-if="props.photographer && props.coverUrl" class="flex gap-2">
          <Text sm class="text-gray-700">Cover image thanks to</Text>
          <Text sm class="text-indigo-700">
            <NuxtLink :to="props.coverUrl" target="_blank" class="hover:(text-indigo-400)">
              {{ props.photographer }}
              <font-awesome-icon :icon="`fa-solid fa-link fa-lg`" />
            </NuxtLink>
          </Text>
        </div>
      </div>
    </Description>
    <br />
    <br />
  </div>
</template>

<script setup lang='ts'>
type titleProps = {
  title: string
  date: string
  description: string
  cover: string
  photographer?: string
  coverUrl?: string
  tags?: Array<string>
}
const props = defineProps<titleProps>()
</script>
