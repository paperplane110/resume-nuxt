<template>
  <Container class="text-center">
    <br />
    <Text hero>Gallery.</Text>
    <Text>
      这里汇集了所有我喜爱的作品：从学院派到印象派、从摄影到 3D 艺术。
      生机勃勃的绿、甜美的粉、温暖的橙黄、冷静的蓝，克制的黑白，
      这<Sparkle rainbow>一切的色彩</Sparkle>组成了我们生活的全部
    </Text>
    <Text class="text-gray-500 dark:text-gray-400">
      From academic to impressionism, from photographs to 3D arts,
      here collects all of my favorite artworks.
      Vibrant green, sweet pink, warm orange, calm blue, rustic black & white,
      that's all about <Sparkle rainbow>life
      </Sparkle>.
    </Text>
    <br />
  </Container>
  <div class="mx-6 <lg:mx-2" v-for="(imgInfo, idx) in imgList" :key="idx">
    <GalleryVpic v-if="isShowV(imgInfo.layout)" v-bind="imgInfo" />
    <GalleryLargeHpicL v-else-if="(width >= 1024) && isEven(idx)" v-bind="imgInfo" />
    <GalleryLargeHpicR v-else-if="(width >= 1024) && !isEven(idx)" v-bind="imgInfo" />
    <GalleryHpic v-else v-bind="imgInfo" />
  </div>
  <br>
</template>

<script setup lang="ts">
const { width, height } = useWindowSize()
const imgList = [
  {
    src: "/img/gallery/painting_lily.jpg",
    hash: "L8Ci,eMwE09E~WIU%MM{00NH%NNL",
    alt: "Carnation, Lily, Lily, Rose(康乃馨，百合，百合，玫瑰)",
    date: '1885-1886',
    place: "John Singer Sargent",
    aspectRatio: 110,
  },
  {
    src: "/img/gallery/2023_wh_sunset.jpg",
    hash: "LmH1lFjtEga|~Uj[R+a|X-a|sTjt",
    alt: "海上落日(The Sunset)",
    date: '2023.05',
    place: "Photoed at Weihai",
  },
  {
    src: "/img/gallery/2023_wh_qiaoxiang.jpg",
    hash: "L%FjKwt9t7R*tpRjf6j]IURjayof",
    alt: "侨乡号邮轮(Qiaoxiang)",
    date: '2023.05',
    place: "Photoed at Weihai, LiuGong Island",
  },
  {
    src: "/img/gallery/2023_wh_sunset_hotel.jpg",
    hash: "LMIqoc~p004U5YN1$~%L0LRj%MR.",
    alt: "窗外落日(The Sunset out the Window)",
    date: '2023.05',
    place: "Photoed at Weihai",
    aspectRatio: 46,
  },
  {
    src: "/img/gallery/2023_bj_concert.jpg",
    hash: "L7B{ZD%100My.8xaZ~M{0gW=}?V@",
    alt: "国家大剧院(Qiaoxiang)",
    date: '2023.02',
    place: "Photoed at Beijing, NCPA",
    aspectRatio: 46,
  },
  {
    src: "/img/gallery/2022_bj_red_leaf.jpeg",
    hash: "LVKmwwp{krRj8_xsg4Six]xtWCt6",
    alt: "地坛红叶(Red Leaves in Ditan Park)",
    date: '2022.11',
    place: "Photoed at Beijing, Ditan Park",
  },
  {
    src: "/img/gallery/2022_bj_tree.jpeg",
    hash: "L4G@So581hX-*:^+-oNw08^$$j}=",
    alt: "秋日的地坛 (Ditan park in Autumn)",
    date: '2022.11',
    place: "Photoed at Beijing, Ditan Park",
  },
  {
    src: "/img/gallery/2022_bj_tree_roof.jpg",
    hash: "LKD8q8I;0#bb}?ofNGI?S$WW$yWW",
    alt: "地坛一角 (Ditan park)",
    date: '2022.11',
    place: "Photoed at Beijing, Ditan Park",
    layout: 'v',
    aspectRatio: 175,
  },
  {
    src: "/img/gallery/2022_bj_child.jpeg",
    hash: "L6GkwItP~V-,?i$xs=IU^%xZIqD*",
    alt: "孩子的地坛 (The Child in Ditan Park)",
    date: '2022.11',
    place: "Photoed at Beijing, Ditan Park",
  },
  {
    src: "/img/gallery/2022_bj_ditan.jpeg",
    alt: "画中的地坛 (Ditan park in the painting)",
    date: '2022.11',
    place: "Photoed at Beijing, the North Gate of Ditan Park",
    detail: '人生海海，你我亦是画中人',
    layout: 'v',
    aspectRatio: 175,
  },
  // {
  //   src: "/img/gallery/2022_au_mountain.jpg",
  //   hash: "L6GkwItP~V-,?i$xs=IU^%xZIqD*",
  //   alt: "The Forest and the Mountain",
  //   date: '2022.11',
  //   place: "Photoed at Beijing, Ditan Park",
  //   layout: 'v',
  //   aspectRatio: 175
  // },
  {
    src: "/img/gallery/painting_spring.jpg",
    hash: "L6GbU-R60301?^9F?ZIA_L0e%e-n",
    alt: "L'eveil du printemps(春醒)",
    date: '1884',
    place: "Luc-Olivier Merson (French, 1846-1920)",
    aspectRatio: 55,
  },
  {
    src: "/img/gallery/2021_bj_moss.jpg",
    hash: "LACk8lXMD-tL~Tt3IWS1I0%K9bE4",
    alt: "小森林(A Tiny Forest)",
    date: '2021.07.24',
    place: "Photoed at Beijing, ZhongGuanCun Park",
  },
  {
    src: "/img/gallery/2021_bj_yihePark.jpg",
    hash: "LWGmiNDiV@ofPXxvofWBE2ozogj[",
    alt: "夏日的颐和园(Yihe Park in Summer)",
    date: '2021.06.05',
    place: "Photoed at Beijing, Yihe Park",
  },
  {
    src: "/img/gallery/2020_uk_gate.jpg",
    hash: "LAC6+5DiCAIAm-oy%LV@0zae=_s:",
    alt: "无题(Untitled)",
    date: '2020.04.26',
    place: "Photoed at Bristol",
  },
  {
    src: "/img/gallery/2020_uk_kidDog.jpeg",
    hash: "L6EWK%tl?v~X03-=?c%NMci%$+k9",
    alt: "The Kid and His Friend",
    date: '2020.04',
    place: "Photoed at Bristol Brandon hill",
  },
  {
    src: "/img/gallery/2020_uk_park.jpeg",
    hash: "L5CY:lD*004o{XNFTGs,01-o~BWX",
    alt: "A Chair in Spring",
    date: '2020.04',
    place: "Photoed at Bristol Brandon hill",
    detail: "春日的布里斯托，落英缤纷，美不胜收"
  },
  {
    src: "/img/gallery/painting_oldStory.jpg",
    hash: "L6Fh6MEi?a^1?^xstRIBEy={Rk58",
    alt: "The Old, Old Story",
    date: '1903',
    place: "John William Godward",
    layout: 'v',
  },
]

const isEven = (idx: number): boolean => {
  if (idx % 2 === 0) {
    return true
  } else {
    return false
  }
}

const isShowV = (layout: string | undefined) => {
  if (layout === 'v' && width.value > 640) {
    return true
  } else {
    return false
  }
}
</script>
