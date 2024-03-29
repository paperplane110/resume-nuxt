<template>
  <Container>
    <div>
      <br />
      <div class="flex justify-between items-center">
        <Text hero>
          {{ title }}
        </Text>
        <NuxtLink to="/about">
          <div class="group w-12 h-12 flex-center transition filter hover:(drop-shadow-md)">
            <Icon name="fa6-solid:language" class="text-4xl transition group-hover:(text-indigo-500)" />
          </div>
        </NuxtLink>
      </div>
      <section>
        <!-- <Text h3> <Icon icon="fa-solid fa-smile" /> 自我介绍 </Text> -->
        <Description src="/img/shafberg_selfi_2.jpeg" :imgSize="2" reverse>
          <Text h3 b>你好啊，朋友！</Text>
          <Text>
            我是<b>袁天宇</b>，是一名测试开发工程师，是<ColorLink type="secondary" href="https://www.apollo.auto/apollo-self-driving">
              <Icon name="ri:baidu-fill" class="text-2xl transform -translate-y-0.8" />
              百度阿波罗
            </ColorLink>团队中的一员，
            负责自动驾驶系统的 <AbbrTip tip="Hardware In Loop 硬件在环">HIL</AbbrTip>仿真测试，以及场景管理平台的开发。
            <br />
            在此之前，我曾以算法测试开发工程师的身份就职于<ColorLink type="warning" href="https://www.aibee.cn/">
              Aibee 🐝
            </ColorLink>。
            最近，我对于全栈技术、UI设计、3D美术很感兴趣（当然，同时也是一名忠实的Steam玩家）
          </Text>
          <div class="flex items-center gap-2">
            <Text b>联系方式: </Text>
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
          技能速览
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
          <Icon name="fa6-solid:briefcase" class="transform -translate-y-1" />
          工作经历
        </Text>
        <Text h4 b>测试开发工程师（仿真方向）</Text>
        <Text>
          2022.12-至今<ColorLink type="secondary" href="https://www.apollo.auto/apollo-self-driving">
            <Icon name="ri:baidu-fill" class="text-2xl transform -translate-y-0.8" />
            Baidu Apollo
          </ColorLink>
        </Text>
        <Text b em>主要职能与职责</Text>
        <Text>
          <ul>
            <li>负责 L2、L3 测试工具链的开发和维护，主要包括路测数据搜索、批量数据构造、数据可视化检查、多平台兼容等多项功能</li>
            <li>负责 L3 项目 HIL 测试环境的开发</li>
            <li>支撑多个部门的 CI、流水线、代码扫描等多项运维服务</li>
          </ul>
        </Text>
        <br />

        <Text h4 b>算法测试开发工程师</Text>
        <Text>
          2021.4-2022.10<ColorLink type="warning" href="https://www.aibee.cn/">@Aibee 🐝</ColorLink>
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
              参与小米、中海地产项目，负责 <b>人体多属性模型</b> 的测试。
              了解需求并建立针对性数据集，编写测试本并实现测试结果的可视化和测试流程的自动化，
              有效保障了模型质量，模型稳定运行在 <span class="text-sky-600">1000+</span> 商铺上。
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
          <Icon name="fa6-solid:graduation-cap" class="transform -translate-y-1" /> 教育经历
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

      <section>
        <Text h3>
          <Icon name="fa6-solid:dice-d20" class="transform -translate-y-1" /> 个人项目
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

    </div>
  </Container>
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
    name: 'L3 测试开发',
    contentList: [
      '基本技能: Python, Cybertron, Protobuf',
      'HIL: Vector, CAN, CANFD, FlexRay',
      '自动化: iPipe, Shell, Docker',
      '代码扫描: Parasoft',
      '可视化: Matplotlib, Plotext',
    ],
  },
  {
    name: '图像算法测试开发',
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
      '数据库: MongoDB, Sqlite',
      '后端: Express, Fastapi',
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

<style scoped>
.sd-card {
  background-image: url(/img/gallery/sd_deer.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
