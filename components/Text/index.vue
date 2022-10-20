<template>
  <span :class="styleList">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'

type Props = {
  hero?: boolean
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  base?: boolean
  sm?: boolean
  p?: boolean
  em?: boolean
  b?: boolean
  code?: boolean
  title?: boolean
  size?: string | number
  weight?: string | number
  gradient?: boolean
}

const props = defineProps<Props>()

const styleList = computed(() => {
  const list: string[] = []
  if (props.hero) {
    list.push('hero')
  } else if (props.h1) {
    list.push('h1')
  } else if (props.h2) {
    list.push('h2')
  } else if (props.h3) {
    list.push('h3')
  } else if (props.h4) {
    list.push('h4')
  } else if (props.base) {
    list.push('base')
  } else if (props.sm) {
    list.push('sm')
  } else {
    list.push('p')
  }
  if (props.code) list.push('code')
  if (props.title) list.push('title')
  if (props.em) list.push('em')
  if (props.b) list.push('b')
  if (props.gradient) list.push('gradient')
  return list
})

// const textGradient = computed(() => {
//   if (props.gradient) {
//     return {
//       background: `-webkit-linear-gradient(${props.gradient})`,
//       "background-clip": "text",
//       "-webkit-background-clip": "text",
//       "-webkit-text-fill-color": "transparent",
//     };
//   } else {
//     return {};
//   }
// });

console.log()
</script>

<style scoped>
span {
  display: block;
}

span::selection {
  @apply text-white bg-gray-500;
}

.hero {
  @apply !text-7xl !my-3rem !font-light;
  @apply <sm: ( !text-5xl);
}

.h1 {
  @apply text-5xl my-2.65rem font-semibold;
  @apply <sm: (text-3xl);
}

.h2 {
  @apply text-4xl my-1.25rem font-medium;
  @apply <sm: (text-2xl);
}

.h3 {
  @apply text-3xl my-1.2rem font-medium;
  @apply <sm: (text-xl);
}

.h4 {
  @apply text-xl my-2 font-medium;
  @apply <sm: (text-lg);
}

.p {
  @apply text-lg my-2;
  @apply <md: (text-base);
}

.base {
  @apply text-base;
}

.sm {
  @apply text-sm;
}

.code {
  @apply font-medium after: content-["`"] before:content-["`"] text-purple-500;
  font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
}

.title {
  @apply my-8 font-bold;
}

span em,
.em {
  font-style: italic;
}

span b,
.b {
  font-weight: 700;
}

.gradient {
  background: -webkit-linear-gradient(45deg,
      rgb(56, 92, 255) -20%,
      rgb(194, 96, 255) 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<style>
span code {
  @apply font-medium after: content-["`"] before:content-["`"] text-purple-500;
  font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
}
</style>
