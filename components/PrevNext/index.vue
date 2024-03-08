<template>
  <div class="flex-between pt-8 pb-6 border-t-gray-200">
    <NuxtLink :to="prev ? prev._path : '/articles'">
      <PrevNextButton type="prev">
        {{ prev ? prev.title : 'Back to Articles' }}
      </PrevNextButton>
    </NuxtLink>

    <NuxtLink :to="next ? next._path : '/articles'">
      <PrevNextButton type="next">
        {{ next ? next.title : 'Back to Articles' }}
      </PrevNextButton>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const [prev, next] = await queryContent('/articles')
  .only(['_path', 'title'])
  .where({ _partial: false })
  .sort({ date: -1 })
  .findSurround(route.path)
</script>
