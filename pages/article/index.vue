<template>
  <div>
    <br />
    <Text hero>
      Article.
    </Text>
    <div class="grid grid-cols-2 gap-8">
      <NuxtLink v-for="(article, idx) in data" :key="idx" :to="article._path">
        <div class="h-full border rounded-1rem overflow-clip bg-light-200 shadow-nsm">
          <div class="h-250px bg-center bg-no-repeat bg-cover" :style="`background-image: url(${article.image.src})`">
          </div>
          <div class="px-4 pb-4">
            <Text h3>{{ article.title }}</Text>
            <Text class="text-gray-500">{{ article.date }}</Text>
            <Text>{{ article.description }}</Text>

          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang='ts'>
const { path } = useRoute()
const { data } = await useAsyncData('article', () => queryContent('/article').find())
</script>
