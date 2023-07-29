<template>
  <Container>
    <main>
      <br />
      <ArticleTitle :title="data?.title" :date="data?.date" :description="data?.description" :cover="data?.image.src"
        :tags="data?.tags" :cover-url="data?.image.url" :photographer="data?.image.photographer"
         :isZh="false" />
      <ContentDoc />
      <div class="h-80px" />
      <PrevNext />
    </main>
  </Container>
</template>

<script setup lang="ts">
import { articleInfo } from '~~/utils/interfaces'

const route = useRoute()
const data = await queryContent<articleInfo>(route.path).findOne()

// SEO
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

// i2n
const slug = route.params.slug[0]
const isZh = () => {
  if (slug.startsWith('_') && slug.endsWith('zh')) return true
  else return false
}

const interLanguageSlug = () => {
  if (isZh()) {
    // current page is in zh
    return slug.slice(1, -3)
  } else {
    return "_" + slug + "_zh"
  }
}

const interLanguagePath = () => {
  return route.path.replace(slug, interLanguageSlug())
}

// BUG cannot work with nuxt 3.6.x
// let linkedArticle: articleInfo | null = null
// try {
//   linkedArticle = await queryContent<articleInfo>(interLanguagePath()).findOne()
// } catch (e) {
//   linkedArticle = null
// }

</script>
