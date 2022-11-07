<template>
  <main>
    <br />
    <ArticleTitle :title="articleInfo.title" :date="articleInfo.date" :description="articleInfo.description"
      :cover="articleInfo.image.src" :tags="articleInfo.tags" />
    <ContentDoc />
    <div class="h-80px" />
    <PrevNext />
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const articleInfo = await queryContent(route.path).findOne()
</script>