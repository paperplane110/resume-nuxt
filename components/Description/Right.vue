<template>
  <a :href="props.link" target="_blank">
    <div class="flex flex-row gap-12 min-h-250px group">
      <div
        class="flex-1 bg-center bg-no-repeat bg-cover border shadow-nsm rounded-1rem min-h-200px transition-all duration-200 group-hover:(shadow-nlg)"
        :style="`background-image: url(${props.src})`">
      </div>
      <div
        class="flex-1 px-4 flex flex-col justify-start transition-all border-l border-transparent duration-200 group-hover:(border-l-dark-400)">
        <div>
          <Text h2>{{ props.title }}</Text>
          <Text>{{ props.contents }}</Text>
        </div>
        <br />
        <div>
          <Text base b class="code-family text-gray-400">{{ props.start }} - {{ props.end }}</Text>
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