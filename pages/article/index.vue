<template>
  <div>
    <br />
    <Text hero>
      Article.
    </Text>

    <div class="grid grid-cols-2 gap-12 <sm:grid-cols-1">
      <NuxtLink v-for="(article, idx) in data" :key="idx" :to="article._path">
        <!-- <div
          class="h-full border rounded-1rem overflow-clip bg-light-200 shadow-nsm transition-all duration-200 hover:(shadow-nlg)">
          <div class="h-200px bg-center bg-no-repeat bg-cover" :style="`background-image: url(${article.image.src})`">
          </div>
          <div class="px-4 pb-4">
            <Text h4>{{ article.title }}</Text>
            <Text sm class="text-gray-500">{{ article.date }}</Text>
            <Text base>{{ article.description }}</Text>
          </div>
        </div> -->
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
