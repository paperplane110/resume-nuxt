<template>
  <main>
    <br />
    <p>{{ articleInfo.date }}</p>
    <p>{{ articleInfo.tags }}</p>
    <ContentDoc />
    <div class="h-80px" />
    <PrevNext />
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const articleInfo = await queryContent(route.path).findOne()
</script>