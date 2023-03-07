<template>
  <div>
    <br />
    <Text hero>
      Articles.
    </Text>

    <!-- The first article -->
    <NuxtLink v-for="(article, idx) in data?.slice(0, 1)" :key="idx" :to="article._path">
      <div class="group flex flex-row gap-10 my-10 <sm:(flex-col gap-2 my-5)">
        <ImageBg class="sm:(flex-1 h-250px) <sm:(h-250px) rounded-1rem transition-all group-hover:(rounded-2rem)"
          :src="article.image.src" :hash="article.image.hash" />
        <div class="flex-1 flex flex-col transition-all">
          <p class="text-4xl <md:(text-2xl) <sm:(text-xl)">{{ article.title }}</p>
          <p class="my-0 text-gray-700 text-md <sm:(text-base font-thin)">{{ article.description }}</p>
          <p class="code-family text-gray-400 text-sm">{{ article.date }}</p>
        </div>
      </div>
    </NuxtLink>

    <!-- Other articles -->
    <div class="grid grid-cols-3 gap-5 <md:grid-cols-2 <sm:grid-cols-1">
      <NuxtLink v-for="(article, idx) in data?.slice(1)" :key="idx" :to="article._path">
        <ArticleFlatCard :title="article.title" :description="article.description" :date="article.date"
          :img-src="article.image.src" :hash="article.image.hash" />
      </NuxtLink>
      <br />
    </div>
    <br />
    <br />
  </div>
</template>

<script setup lang='ts'>
import { articleInfo } from "~~/utils/interfaces"
const { data } = await useAsyncData('article', () => queryContent<articleInfo>('/article').sort({ date: -1 }).find())
</script>
