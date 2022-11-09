<template>
  <div>
    <div class="flex justify-between items-center">
      <Text h1>
        {{ title }}
      </Text>
      <NuxtLink to="/about/zh">
        <div class="group w-12 h-12 flex-center transition filter hover:(drop-shadow-md)">
          <font-awesome-icon icon="fa-solid fa-language" class="text-3xl transition group-hover:(text-[#4f71d1])" />
        </div>
      </NuxtLink>
    </div>

    <section>
      <!-- <Text h3> <font-awesome-icon icon="fa-solid fa-smile" /> About me </Text> -->
      <Description src="/img/london_selfi.jpeg" :imgSize="2" reverse>
        <Text> Hi there!</Text>
        <Text h3 b>I'm Tianyu 👋</Text>
        <Text>
          I'm currently doing algorithm testing at
          <ColorLink type="warning" href="https://www.aibee.cn/">
            Aibee 🐝
          </ColorLink>
          to ensure and improve the quality of image algorithms. Recently, I'm
          interested in Full-Stack technology, UI design, 3D arts, and games of
          course.
        </Text>
        <div class="flex items-center gap-2">
          <Text b>Contacts: </Text>
          <a href="mailto:tim3-yuan@foxmail.com"
            class="w-12 h-12 flex-center rounded-1 transition-all hover:(shadow-nsm)">
            <font-awesome-icon icon="fa-solid fa-envelope" class="text-2xl" />
          </a>
          <a href="https://github.com/paperplane110" target="_blank"
            class="w-12 h-12 flex-center rounded-1 transition-all hover:(shadow-nsm)">
            <font-awesome-icon icon="fa-brands fa-github" class="text-2xl transition" />
          </a>
        </div>
      </Description>
    </section>

    <section>
      <Text h3>
        <font-awesome-icon icon="fa-solid fa-bolt" />
        Skills
      </Text>
      <div class="grid grid-cols-3 gap-2 <md:grid-cols-1">
        <Card class="px-1.25rem pt-3 pb-6" variant="flat" is-hoverable v-for="(skillInfo, idx) in skillList" :key="idx">
          <template #header>
            <Text h4 b>{{ skillInfo.name }}</Text>
          </template>
          <template #body>
            <Text base>
              <ul class="pl-0">
                <li v-for="(s, idx) in skillInfo.contentList" :key="idx">
                  {{ s }}
                </li>
              </ul>
            </Text>
          </template>
        </Card>
      </div>
    </section>

    <section>
      <Text h3>
        <font-awesome-icon icon="fa-solid fa-briefcase" /> Work Experience
      </Text>
      <Text h4 b>Software Engineer in Algorithm Test</Text>
      <Text p>
        2020.4-Current<ColorLink type="warning" href="https://www.aibee.cn/">@Aibee 🐝</ColorLink>
      </Text>
      <Text b em>Key Qualifications & Responsibilities</Text>
      <Text>
        <ul>
          <li>
            Responsible for 5+ models' testing and giving test reports including
            badcase analysis and data visualization
          </li>
          <ul>
            <li>Face recognition model</li>
            <li>Face anti-spoofing model</li>
            <li>Face mask classification model</li>
            <li>Body 21-attributes model</li>
            <li>Car brand classification model</li>
          </ul>
          <li>
            Liases with algorithm researchers and improve the performance of
            models
          </li>
          <li>
            Design, write and debugged dev-tools to automate model test
            procedures, and boost the model verification flow
          </li>
        </ul>
      </Text>
      <Text b em>Key Achivements</Text>
      <Text>
        <ul>
          <li>
            Leading a four people group, developing a data management system
            called
            <ColorLink type="success">Data Manager</ColorLink>, which helps
            testers managing millions of images' data and hundreds of
            benchmarks. Increasing dataset management efficiency by 20%.
          </li>
          <li>
            Cooperating with algorithms researchers, pass the key algorithm
            certification:
            <ColorLink :href="bctcLink" target="_blank">BCTC face anti-spoofing</ColorLink>certification.
          </li>
          <li>
            Optimized the face recognition test tools with
            <ColorLink type="secondary" :href="faissLink" target="_blank">Faiss</ColorLink>, shortening test time nearly
            4X.
          </li>
        </ul>
      </Text>
    </section>

    <section>
      <Text h3>
        <font-awesome-icon icon="fa-solid fa-graduation-cap" /> Education
      </Text>
      <Text h4 b>MSc. Robotics</Text>
      <Text>
        2019.10-2020.10
        <ColorLink :href="uobLink">@University of Bristol </ColorLink>, UK
      </Text>
      <br />
      <Text h4 b>BSc. Vehicle Engineering</Text>
      <Text>
        2015.9-2019.6
        <ColorLink type="secondary" :href="scutLink">@South China University of Technology </ColorLink>, China
      </Text>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { randomToWord } from '../../utils/randomToWord'

const title = ref('个人简历.')

onMounted(() => {
  randomToWord(title, 'Resume.')
})

const faissLink =
  'https://engineering.fb.com/2017/03/29/data-infrastructure/faiss-a-library-for-efficient-similarity-search/'
const bctcLink = 'https://www.bctest.com/content/32.html'
const uobLink = 'https://en.wikipedia.org/wiki/University_of_Bristol'
const scutLink =
  'https://zh.wikipedia.org/wiki/%E5%8D%8E%E5%8D%97%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6'

const skillList = [
  {
    name: 'Test skills',
    contentList: [
      'Basic: Python, Shell, Docker',
      'Automation: Airflow, GitLab-CI',
      'Analysis & Visualization: Numpy, Pandas, Opencv, Plotly',
    ],
  },
  {
    name: 'Full-Stack',
    contentList: [
      'Basic: HTML, CSS, JavaScript',
      'Back-End: Express, MongoDB',
      'Front-End: Vue3, Nuxt',
    ],
  },
  {
    name: 'Others',
    contentList: [
      'Language: Chinese(Mother tongue), English(IELTS: 7)',
      '2D Design: Figma',
      '3D Design: Blender, CATIA',
    ],
  },
]
</script>
