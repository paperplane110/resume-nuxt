<template>
  <div>
    <div class="flex justify-between items-center">
      <Text h1>
        {{ title }}
      </Text>
      <NuxtLink to="/about">
        <div class="group w-12 h-12 flex-center transition filter hover:(drop-shadow-md)">
          <font-awesome-icon icon="fa-solid fa-language" class="text-3xl transition group-hover:(text-[#4f71d1])" />
        </div>
      </NuxtLink>
    </div>
    <section>
      <!-- <Text h3> <font-awesome-icon icon="fa-solid fa-smile" /> 自我介绍 </Text> -->
      <Description src="/img/london_selfi.jpeg" :imgSize="2" reverse>
        <Text h3 b>你好啊，朋友！</Text>
        <Text>
          我是<b>袁天宇</b>，是一名算法测试开发工程师，我目前就职于一家叫做
          <ColorLink type="warning" href="https://www.aibee.cn/">
            Aibee 🐝
          </ColorLink>
          的人工智能企业，我主要负责保证算法模型的质量并辅助提升其性能。
          最近，我对于全栈技术、UI设计、3D美术很感兴趣（当然，同时也是一名忠实的Steam玩家）
        </Text>
        <div class="flex items-center gap-2">
          <Text b>联系方式: </Text>
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
        技能速览
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
        <font-awesome-icon icon="fa-solid fa-briefcase" />
        工作经历
      </Text>
      <Text h4 b>算法测试开发工程师</Text>
      <Text>
        2020.4-现在<ColorLink type="warning" href="https://www.aibee.cn/">@Aibee 🐝</ColorLink>
      </Text>
      <Text b em>主要职能与职责</Text>
      <Text>
        <ul>
          <li>
            曾前后负责5个以上不同类型的模型测试，主要测试分类模型。
            负责按时产出测试报告、对算法结果进行数据可视化、并分析算法badcase。
            接手过的模型如下：
          </li>
          <ul>
            <li>人脸识别模型</li>
            <li>人脸活体检测模型</li>
            <li>人脸口罩分类模型</li>
            <li>人体多属性模型</li>
            <li>车辆品牌及子品牌模型</li>
          </ul>
          <li>同算法工程师紧密合作，及时反馈算法问题，辅助提升算法性能</li>
          <li>设计并编写测试工具，自动化模型测试流程，为算法验证提速</li>
        </ul>
      </Text>

      <Text b em>工作亮点</Text>
      <Text>
        <ul>
          <li>
            带领4人小组开发数据管理系统:
            <ColorLink type="success">Data Manager</ColorLink>。
            该系统管理了<strong>千万级</strong>的图片数据与<strong>上百个</strong>benchmark，
            便于算法测试管理数据，降低了数据集的管理成本和标注成本
          </li>
          <li>
            与算法工程师紧密合作，在测试中发现并总结人脸活体算法在应对实际场景时所暴露的问题。
            积极协调数据采集团队，为算法训练补充数据。
            并最终通过了金融支付领域的关键认证
            <ColorLink :href="bctcLink" target="_blank">BCTC 银联活体认证 </ColorLink>。并进行了团队经验分享。
          </li>
          <li>
            面对千万级底库人脸识别测试时间过长的问题，主动进行相关资料的搜索和学习，
            最终使用
            <ColorLink type="secondary" :href="faissLink" target="_blank">
              Faiss
            </ColorLink>
            人脸特征搜索库，将测试时间压缩
            <em><b>4</b></em>
            倍
          </li>
        </ul>
      </Text>
    </section>

    <section>
      <Text h3>
        <font-awesome-icon icon="fa-solid fa-graduation-cap" /> 教育经历
      </Text>
      <Text h4 b>机器人学·硕士</Text>
      <Text>
        2019.10-2020.10
        <ColorLink :href="uobLink">@布里斯托大学 </ColorLink>, 英国布里斯托
      </Text>
      <Text>
        核心课程：图像处理与计算机视觉，人工智能导论，智能信息系统，机器人学导论
      </Text>
      <br />
      <Text h4 b>车辆工程·学士</Text>
      <Text>
        2015.9-2019.6
        <ColorLink type="secondary" :href="scutLink">@华南理工大学 </ColorLink>,
        中国广州
      </Text>
      <Text>核心课程：汽车构造，汽车发动机原理，汽车理论，单片机原理</Text>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { randomToWord } from '../../utils/randomToWord'

const title = ref('Resume.')

onMounted(() => {
  randomToWord(title, '个人简历.')
})

const faissLink =
  'https://engineering.fb.com/2017/03/29/data-infrastructure/faiss-a-library-for-efficient-similarity-search/'
const bctcLink = 'https://www.bctest.com/content/32.html'
const uobLink = 'https://en.wikipedia.org/wiki/University_of_Bristol'
const scutLink =
  'https://zh.wikipedia.org/wiki/%E5%8D%8E%E5%8D%97%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6'

const skillList = [
  {
    name: '测试技术',
    contentList: [
      '基本技能: Python, Shell, Docker',
      '自动化: Airflow, GitLab-CI',
      '数据分析和可视化: Numpy, Pandas, Opencv, Plotly',
    ],
  },
  {
    name: '全栈开发',
    contentList: [
      '基本技能: HTML, CSS, JavaScript',
      '后端: Express, MongoDB',
      '前端: Vue3, Nuxt',
    ],
  },
  {
    name: '其他',
    contentList: [
      '语言能力: 中文（母语）,英语（雅思: 7）',
      '2D设计: Figma',
      '3D设计: Blender, CATIA',
    ],
  },
]
</script>
