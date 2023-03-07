<template>
  <main>
    <br />
    <ArticleTitle :title="data?.title" :date="data?.date" :description="data?.description" :cover="data?.image.src"
      :tags="data?.tags" :cover-url="data?.image.url" :photographer="data?.image.photographer" />
    <ContentDoc />
    <div class="h-80px" />
    <PrevNext />
  </main>
</template>

<script setup lang="ts">
import { articleInfo } from '~~/utils/interfaces'

const route = useRoute()
const data = await queryContent<articleInfo>(route.path).findOne()

if (data?.value) {
  useServerSeoMeta({
    title: data.value.title,
    description: data.value.description,
    author: "Tianyu",

    // open graph
    ogTitle: data.value.title,
    ogType: "article",
    ogDescription: data.value.description,
    ogImage: `https://tyyuan110.com${data.value.image.src}`,  // TODO hardcode
    ogImageAlt: data.value.image.alt,

    // twitter
    twitterTitle: data.value.title,
    twitterCard: "summary_large_image",
    twitterDescription: data.value.description,
    twitterImage: `https://tyyuan110.com${data.value.image.src}`,

    viewport: "width=device-width, initial-scale=1.0",
  })
}
</script>
