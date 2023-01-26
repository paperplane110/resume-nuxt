<template>
  <a :href="props.link" target="_blank">
    <div class="mb-10 flex flex-row gap-10 min-h-250px group transition-all hover:(gap-6)">
      <div class="flex-1 bg-center bg-no-repeat bg-cover border border-dark-300 rounded-1rem min-h-200px"
        :style="`background-image: url(${props.src})`">
      </div>
      <div
        class="flex-1 px-2 flex flex-col justify-start transition-all border-l border-transparent group-hover:(border-l-dark-400)">
        <div>
          <Text h2>{{ props.title }}</Text>
          <Text>{{ props.contents }}</Text>
        </div>
        <div>
          <Text base class="code-family text-gray-500">{{ props.start }} - {{ props.end }}</Text>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang='ts'>
const props = defineProps({
  src: {
    type: String,
    default: '/img/sample.jpg',
  },
  title: {
    type: String,
    default: 'Title',
  },
  contents: {
    type: String,
  },
  start: {
    type: String,
    default: 'xxxx.xx',
  },
  end: {
    type: String,
    default: 'xxxx.xx',
  },
  link: {
    type: String,
    default: '/',
  },
  reverse: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>

</style>