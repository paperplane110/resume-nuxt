<script lang="ts">
import { defineComponent } from '#imports'
export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
  },
  computed: {
    isHeader() {
      return this.language || this.filename
    },
    isRounded() {
      if (this.language || this.filename) return 'rounded-b-1rem'
      else return 'rounded-1rem'
    },
  },
})
</script>

<template>
  <Card class="my-6">
    <template #header v-if="isHeader">
      <div class="flex justify-between items-center px-4 py-2 rounded-t-1rem bg-dark-300 text-gray-300">
        <div class="flex items-center gap-2 flex-1">
          <div class="w-3 h-3 rounded-1 bg-red-500 "></div>
          <div class="w-3 h-3 rounded-1 bg-yellow-500 "></div>
          <div class="w-3 h-3 rounded-1 bg-green-500"></div>
        </div>
        <div class="flex-1 text-center">
          {{ filename ? filename : '' }}
        </div>
        <div class="flex-1 text-right ">{{ language }}</div>
      </div>
    </template>
    <template #body>
      <div class="px-4 py-2 bg-dark-700 overflow-auto " :class="isRounded">
        <slot />
      </div>
    </template>
  </Card>
</template>

<style>
pre code .line {
  font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
  display: block;
  min-height: 1rem;
  color: rgb(211, 211, 211);
}

pre code .line.highlight {
  @apply -mx-4 pl-3 pr-4 bg-dark-300 border-l-4 border-l-green-500;
}

.dark pre code .line.highlight {
  @apply -mx-4 px-4 bg-dark-300 border-l-1 border-l-green-500;
}

@media (max-width: 768px) {

  pre code .line {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}
</style>
