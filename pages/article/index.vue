<template>
  <div>
    <br />
    <Text hero>
      Article.
    </Text>
    <div class="grid grid-cols-2 gap-12 <sm:grid-cols-1">
      <NuxtLink v-for="(article, idx) in data.reverse()" :key="idx" :to="article._path">
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
        <div class="group ">
          <div class="h-250px bg-center bg-no-repeat bg-cover rounded-1rem transition-all group-hover:(rounded-3rem)"
            :style="`background-image: url(${article.image.src})`">
          </div>
          <p class="text-3xl font-thin">{{ article.title }}</p>
          <div class="flex gap-4 transition-all">
            <p class="code-family text-sm">{{ article.date }}</p>
            <p class="text-gray-400 font-thin text-base">{{ article.description }}</p>
          </div>

        </div>
      </NuxtLink>
      <br />
    </div>
    <br />
    <br />
  </div>
</template>

<script setup lang='ts'>
const { data } = await useAsyncData('article', () => queryContent('/article').find())
</script>

<style scoped>
.code-family {
  font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
}
</style>