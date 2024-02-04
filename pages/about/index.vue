<template>
  <Container>
    <div>
      <br />
      <div class="flex justify-between items-center">
        <Text hero>
          {{ title }}
        </Text>
        <NuxtLink to="/about/zh">
          <div class="group w-12 h-12 flex-center transition filter hover:(drop-shadow-md)">
            <Icon name="fa6-solid:language" class="text-4xl transition group-hover:(text-indigo-500)" />
          </div>
        </NuxtLink>
      </div>

      <section>
        <!-- <Text h3> <Icon icon="fa-solid fa-smile" /> About me </Text> -->
        <Description src="/img/london_selfi.jpeg" :imgSize="2" reverse>
          <Text> Hi there!</Text>
          <Text h3 b>I'm Tianyu</Text>
          <Text>
            I'm a <AbbrTip tip="software engineer in test">SET</AbbrTip> in <ColorLink type="secondary"
              href="https://www.apollo.auto/apollo-self-driving">
              <Icon name="ri:baidu-fill" class="text-2xl transform -translate-y-0.8" />
              Baidu Apollo
            </ColorLink> group. Focus on L3 system's <AbbrTip tip="Hardare in Loop">HIL</AbbrTip>
            simulation.
            <br />
            Before that, I'm a SET (algorithm test) in
            <ColorLink type="warning" href="https://www.aibee.cn/">
              Aibee 🐝
            </ColorLink>. Recently, I'm
            interested in Full-Stack technology, UI design, 3D arts, and games of
            course.
          </Text>
          <div class="flex items-center gap-2">
            <Text b>Contacts: </Text>
            <a href="mailto:tim3-yuan@foxmail.com"
              class="w-12 h-12 flex-center rounded-1 transition-all hover:(shadow-nsm)">
              <Icon name="fa6-solid:envelope" class="text-2xl transition-color" />
            </a>
            <a href="https://github.com/paperplane110" target="_blank"
              class="w-12 h-12 flex-center rounded-1 transition-all hover:(shadow-nsm)">
              <Icon name="logos:github-icon" class="text-2xl transition-color" />
            </a>
          </div>
        </Description>
      </section>

      <section>
        <Text h3>
          <Icon name="fa6-solid:bolt" class="transform -translate-y-1" />
          Skills
        </Text>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card class="px-1.25rem pt-3 pb-6 dark:bg-opacity-10" variant="flat"
            v-for="(skillInfo, idx) in skillList" :key="idx">
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
          <Icon name="fa6-solid:briefcase" class="transform -translate-y-1" /> Work Experience
        </Text>
        <Text h4 b>Software Engineer in Test (Test tool chain dev & HIL & CI)</Text>
        <Text>
          2022.12-Current<ColorLink type="secondary" href="https://www.apollo.auto/apollo-self-driving">
            <Icon name="ri:baidu-fill" class="text-2xl transform -translate-y-0.8" />
            Baidu Apollo
          </ColorLink>
        </Text>
        <Text b em>Key Qualifications & Responsibilities</Text>
        <Text>
          <ul>
            <li>
              Developed and maintained L2 and L3 testing toolchains,
              including functionalities such as road test data search,
              batch data generation, data visualization inspection, and cross-platform compatibility.
            </li>
            <li>
              Led the development of the HIL testing environment for L3 projects.</li>
            <li>
              Provided support for multiple departments in various operations,
              including CI, pipeline management, and automotive-grade code scanning (Parasoft).
            </li>
          </ul>
        </Text>
        <!-- <Text b em>Key Achivements</Text>
        <Text>
          <ul>
            <li>
            </li>
          </ul>
        </Text> -->
        <br />
        <Text h4 b>Software Engineer in Algorithm Test</Text>
        <Text p>
          2021.4-2022.10<ColorLink type="warning" href="https://www.aibee.cn/">@Aibee 🐝</ColorLink>
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
          <Icon name="fa6-solid:graduation-cap" class="transform -translate-y-1" /> Education
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

    <section>
      <Text h3>
        <Icon name="fa6-solid:dice-d20" class="transform -translate-y-1" /> Side Projects
      </Text>
      <div class="grid grid-cols-2 gap-2 <md:grid-cols-1">
        <Card class="sd-card col-span-2 min-h-200px" variant="flat">
          <template #header>
            <div class="px-1.5rem pt-5">
              <Text class="text-white" sm>EXPERIMENT</Text>
            </div>
          </template>
          <template #body>
            <div class="px-1.5rem">
              <Text h2 b class="text-white shadow-nmd">Stable Diffusion Art</Text>
            </div>
          </template>
          <template #footer>
            <div class="flex px-1.5rem py-2 justify-end">
              <NuxtLink to="https://civitai.com/user/paperplane110">
                <button class="px-2 py-1 bg-green-100 bg-opacity-30 rounded-16px">
                  <Text sm b class="text-white">More Art</Text>
                </button>
              </NuxtLink>
            </div>
          </template>
        </Card>
      </div>
    </section>

  </Container>
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
    name: 'L3 Test Development',
    contentList: [
      'Basic: Python, Cybertron, Protobuf',
      'HIL: Vector, CAN, CANFD, FlexRay',
      'Automation: iPipe, Shell, Docker',
      'Code Scan: Parasoft',
      'Visualization: Matplotlib, Plotext',
    ],
  },
  {
    name: 'Image Algorithm Test skills',
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
      'Databased: MongoDB, Sqlite',
      'Back-End: Express, Fastapi',
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

<style scoped>
.sd-card {
  background-image: url(/img/gallery/sd_deer.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
