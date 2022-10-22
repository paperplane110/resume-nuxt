<template>
  <div class="flex-between pt-8 pb-6 border-t-gray-200">
    <NuxtLink v-if="prev" :to="prev._path">
      <PrevNextButton type="prev">
        {{ prev.title }}
      </PrevNextButton>
    </NuxtLink>
    <NuxtLink v-else to="/article">
      Back to Article
    </NuxtLink>

    <NuxtLink v-if="next" :to="next._path">
      <PrevNextButton type="next">
        {{ next.title }}
      </PrevNextButton>
    </NuxtLink>
    <NuxtLink v-else to="/article">
      Back to Article
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const [prev, next] = await queryContent('/article')
  .only(['_path', 'title'])
  .sort({ date: 1 })
  .findSurround(route.path)
</script>