<template>
  <main>
    <br />
    <Text>{{path}}</Text>
    <ContentDoc />
  </main>
</template>

<script setup lang="ts">
const { path } = useRoute()
</script>