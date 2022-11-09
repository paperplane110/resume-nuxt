<template>
  <div>
    <br />
    <Text hero>
      Articles.
    </Text>

    <div class="grid grid-cols-2 gap-12 <sm:grid-cols-1">
      <NuxtLink v-for="(article, idx) in data" :key="idx" :to="article._path">
        <ArticleFlatCard :title="article.title" :description="article.description" :date="article.date"
          :img-src="article.image.src" />
      </NuxtLink>
      <br />
    </div>
    <br />
    <br />
  </div>
</template>

<script setup lang='ts'>
const { data } = await useAsyncData('article', () => queryContent('/article').sort({ date: -1 }).find())
</script>
