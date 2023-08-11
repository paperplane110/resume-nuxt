<template>
  <Container>
    <div>
      <br />
      <Text hero>Projects.</Text>
      <!-- <div v-for="(info, idx) in projects_info" :key="idx" class="mb-12">
        <DescriptionRight :src="info.src" :title="info.title" :contents="info.contents" :start="info.start" :end="info.end"
          :link="info.link" />
      </div> -->

      <div class="grid grid-cols-1 gap-10 mt-8">
        <ProjectBrief v-for="(info, idx) in projectsInfo" :key="idx" v-bind="info"
          class="group flex items-center gap-8" />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { projectBriefProps } from '~~/utils/interfaces';
const projectsInfo: projectBriefProps[] = [
  {
    fromColor: 'from-orange-300',
    toColor: 'to-red-700',
    backColor: 'bg-orange-200/70',
    abbr: 'TT',
    name: 'Tomato Timer',
    description: 'A tomato timer inspired by Simonheys\' wordclock',
    start: '2023.08',
    end: '2023.08',
    link: 'project/timer'
  },
  {
    fromColor: 'from-pink-300',
    toColor: 'to-purple-700',
    backColor: 'bg-pink-200/70',
    abbr: 'SD',
    name: 'Stable Diffusion Art',
    description: 'Created artworks with stable diffusion',
    start: '2023.07',
    end: 'now',
    link: 'gallery/'
  },
  {
    fromColor: 'from-lime-400',
    toColor: 'to-green-500',
    backColor: 'bg-lime-300/70',
    abbr: 'Ba',
    name: 'Badges',
    description: '设定目标，收获徽章，让生活充满正反馈',
    start: '2023.02',
    end: 'now',
    link: 'https://badges-fe.pages.dev/'
  },
  {
    fromColor: 'from-gray-400',
    toColor: 'to-gray-800',
    backColor: 'bg-gray-300/70',
    abbr: 'Kilo',
    name: 'Kilo',
    description: '使用 C 语言编写的极简文本编辑器',
    start: "2022.12",
    end: "2023.01",
    link: "https://github.com/paperplane110/kilo-text-editor",
  },
  {
    fromColor: 'from-green-300',
    toColor: 'to-cyan-500',
    backColor: 'bg-teal-200/70',
    abbr: 'DM',
    name: 'Data Manager',
    description: '千万级图片数据集管理平台，旨在实现数据多维标签的管理。',
    start: "2021.10",
    end: "2022.10",
    link: "#"
  },
  {
    fromColor: 'from-sky-300',
    toColor: 'to-blue-500',
    backColor: 'bg-sky-200/70',
    abbr: 'GT',
    name: 'Gobang in Termial',
    description: 'A gobang game that could be played in a termial',
    start: "2021.01",
    end: "2022.01",
    link: "https://github.com/paperplane110/gobang"
  }
]
</script>
