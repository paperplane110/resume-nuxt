<template>
  <div>
    <Description :src="props.cover" reverse :textSize="1.5">
      <div>
        <Text hero>{{ props.title }}</Text>
        <div class="flex gap-4">
          <Text base class="text-gray-700 dark:text-gray-300 code-family">{{ props.date }}</Text>
          <Text base class="text-gray-400">{{ props.description }}</Text>
        </div>

        <!-- Tag -->
        <div v-if="props.tags" class="py-4 flex gap-2">
          <div v-for="(tag, idx) in props.tags" :key="idx"
            class="px-0.3rem rounded-0.5rem bg-slate-500 text-white code-family dark:text-black">
            <Text sm class="dark:!text-black">{{ tag }}</Text>
          </div>
        </div>

        <!-- Cover Image -->
        <div v-if="props.photographer && props.coverUrl" class="flex gap-2">
          <Text sm class="text-gray-700 dark:text-gray-300">
            {{ props.isZh ? "封面图来自" : "Cover image thanks to" }}
          </Text>
          <span class="text-sm">
            <NuxtLink :to="props.coverUrl" target="_blank"
              class="text-indigo-700 hover:(text-indigo-300) dark:(text-indigo-400)">
              {{ props.photographer }}
              <font-awesome-icon :icon="`fa-solid fa-link fa-lg`" />
            </NuxtLink>
          </span>
        </div>

        <!-- en zh Link -->
        <div v-if="props.enzhLink" class="group text-sm mt-2 text-gray-700 hover:(text-gray-500) dark:(text-gray-300)">
          <NuxtLink :to="props.enzhLink">
            {{ props.isZh ? "Avaliable in English" : "可阅读中文版" }}
            <font-awesome-icon class="group-hover:(text-yellow-400)" :icon="`fa-solid fa-lightbulb`" />
          </NuxtLink>
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
  isZh: boolean
  enzhLink?: string
}
const props = defineProps<titleProps>()
</script>
