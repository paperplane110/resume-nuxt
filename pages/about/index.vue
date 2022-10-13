<template>
    <div class="aboutMe">
        <div style="display: flex; align-items: center; justify-content: space-between">
            <Text h1>
                {{ title }}
            </Text>
            <router-link to="/zh/cv">
                <font-awesome-icon class="lang-icon" icon="fa-solid fa-language" size="2x" />
            </router-link>
        </div>

        <section>
            <Text h2>
                <font-awesome-icon icon="fa-solid fa-smile" /> About me
            </Text>
            <Text h3 em> Hi! I'm Tianyu 👋 </Text>
            <Text>
                I'm currently doing algorithm testing at
                <ColorLink type="warning" href="https://www.aibee.cn/">Aibee 🐝</ColorLink>
                to ensure and improve the quality of image algorithms. I'm interested in
                Full-Stack technology, UI design, 3D arts, and games of course.
            </Text>
        </section>

        <section>
            <Text h2>
                <font-awesome-icon icon="fa-solid fa-bolt" />
                Skills
            </Text>
            <div class="skills">
                <div class="skills-card">
                    <Text h3>Test skills</Text>
                    <ul>
                        <li>Basic: Python, Shell, Docker</li>
                        <li>Automation: Airflow, GitLab-CI</li>
                        <li>Analysis & Visualization: Numpy, Pandas, Opencv, Plotly</li>
                    </ul>
                </div>
                <div class="skills-card">
                    <Text h3>Full-Stack</Text>
                    <ul>
                        <li>Basic: HTML, CSS, JavaScript</li>
                        <li>Back-End: Express, MongoDB</li>
                        <li>Front-End: Vue</li>
                    </ul>
                </div>
                <div class="skills-card">
                    <Text h3>Others</Text>
                    <ul>
                        <li>Language: Chinese(Mother tongue), English(IELTS: 7)</li>
                        <li>Design: Figma, Blender, CATIA</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h2>
                <font-awesome-icon icon="fa-solid fa-briefcase" /> Work Experience
            </h2>
            <h3>Software Engineer in Algorithm Test</h3>
            <p>
                2020.4-Current<ColorLink type="warning" href="https://www.aibee.cn/">@Aibee 🐝</ColorLink>
            </p>
            <h3>Key Qualifications & Responsibilities</h3>
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

            <h3>Key Achivements</h3>
            <ul>
                <li>
                    Leading a four people group, developing a data management system
                    called
                    <ColorLink type="success">Data Manager</ColorLink>, which helps
                    testers managing millions of images' data and hundreds of benchmarks.
                    Increasing dataset management efficiency by 20%.
                </li>
                <li>
                    Cooperating with algorithms researchers, pass the key algorithm
                    certification:
                    <ColorLink :href="bctcLink" target="_blank">BCTC face anti-spoofing</ColorLink>certification.
                </li>
                <li>
                    Optimized the face recognition test tools with
                    <ColorLink type="secondary" :href="faissLink" target="_blank">Faiss</ColorLink>, shortening test
                    time nearly 4X.
                </li>
            </ul>
        </section>

        <section>
            <h2>
                <font-awesome-icon icon="fa-solid fa-graduation-cap" /> Education
            </h2>
            <h3>MSc. Robotics</h3>
            <p>
                2019.10-2020.10
                <ColorLink :href="uobLink">@University of Bristol </ColorLink>, UK
            </p>
            <h3>BSc. Vehicle Engineering</h3>
            <p>
                2015.9-2019.6
                <ColorLink type="secondary" :href="scutLink">@South China University of Technology </ColorLink>, China
            </p>
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
</script>
