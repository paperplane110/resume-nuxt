<template>
  <div>
    <br />
    <Text hero>Projects.</Text>
    <DescriptionRight v-for="(info, idx) in projects_info" :id="idx" :src="info.src" :title="info.title"
      :contents="info.contents" :start="info.start" :end="info.end" :link="info.link" />
  </div>
</template>

<script setup lang="ts">
const projects_info = [
  {
    src: "img/project/kilo_cover.jpg",
    title: "Kilo",
    contents: "使用 C 语言编写的极简文本编辑器",
    start: "2022.12",
    end: "2023.01",
    link: "https://github.com/paperplane110/kilo-text-editor"
  },
  {
    src: "img/project/dm_cover.jpeg",
    title: "Data Manager",
    contents: "DM(Data Manager)是一个数据集管理平台，旨在实现数据多维标签的管理。兼顾用户权限管理、数据备份、数据版本回滚等功能。同时还提供一套便于用户使用的Python SDK、CLI",
    start: "2021.10",
    end: "2022.10",
    link: "#"
  }
]
</script>