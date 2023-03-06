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
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

interface articleInfo extends ParsedContent {
  title: string
  date: string
  description: string
  image: {
    src: string
    alt: string
    url: string
    photographer: string
  }
  tags: string[]
}

const route = useRoute()
const { data } = await useAsyncData('article', () => queryContent<articleInfo>(route.path).findOne())

if (data?.value) {
  useServerSeoMeta({
    title: data.value.title,
    description: data.value.description,

    // open graph
    ogTitle: data.value.title,
    ogType: "website",
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
