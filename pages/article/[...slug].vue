<template>
  <main>
    <br />
    <Text>Path: {{ route.path }}</Text>
    <Text>slug: <code>{{ route.params.slug }}</code></Text>
    <ContentDoc />
    <div class="h-80px" />
    <PrevNext />
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
</script>