<template>
    <span :class="styleList">
        <slot></slot>
    </span>
</template>
  
<script setup lang="ts">
import { computed } from '@vue/reactivity'

type Props = {
    h1?: boolean
    h2?: boolean
    h3?: boolean
    h4?: boolean
    em?: boolean
    b?: boolean
    p?: boolean
    code?: boolean
    title?: boolean
    size?: string | number
    weight?: string | number
    gradient?: boolean
}

const props = defineProps<Props>()

const styleList = computed(() => {
    const list: string[] = []
    if (props.h1) {
        list.push('h1')
    } else if (props.h2) {
        list.push('h2')
    } else if (props.h3) {
        list.push('h3')
    } else if (props.h4) {
        list.push('h4')
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
  
<style scope>
span {
    display: block;
}

span::selection {
    @apply text-white bg-gray-500;
}

.h1 {
    @apply text-5xl font-semibold my-4;
}

.h2 {
    @apply text-4xl font-medium my-2;
}

.h3 {
    @apply text-3xl font-medium my-2;
}

.h4 {
    @apply text-2xl font-medium my-2;
}

.p {
    @apply text-lg;
}

span code,
.code {
    @apply font-mono font-normal after: content-["`"] before:content-["`"] text-purple-400;

}

.title {
    @apply my-8;
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