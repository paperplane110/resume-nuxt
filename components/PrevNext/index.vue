<template>
  <div class="flex-between pt-8 pb-6 border-t-gray-200">
    <NuxtLink :to="prev ? prev._path : '/article'">
      <PrevNextButton type="prev">
        {{ prev ? prev.title : 'Back to Article' }}
      </PrevNextButton>
    </NuxtLink>

    <NuxtLink :to="next ? next._path : '/article'">
      <PrevNextButton type="next">
        {{ next ? next.title : 'Back to Article' }}
      </PrevNextButton>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const [prev, next] = await queryContent('/article')
  .only(['_path', 'title'])
  .sort({ date: -1 })
  .findSurround(route.path)
</script>