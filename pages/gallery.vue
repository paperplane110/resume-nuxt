<template>
  <div>
    <br />
    <Text hero>Gallery.</Text>
    <Text>{{ width }} * {{ height }}</Text>
    <Text>
      这里汇集了所有我喜爱的作品：从学院派到印象派、从摄影到 3D 艺术。
      生机勃勃的绿、甜美的粉、温暖的橙黄、冷静的蓝，克制的黑白，
      这<Sparkle rainbow>一切的色彩</Sparkle>组成了我们生活的全部
    </Text>
    <Text class="text-gray-500">
      From academic to impressionism, from photographs to 3D arts,
      here collects all of my favorite artworks.
      Vibrant green, sweet pink, warm orange, calm blue, rustic black & white,
      that's all about <Sparkle rainbow>life
      </Sparkle>.
    </Text>
    <br />
    <div v-for="(imgInfo, idx) in imgList" :key="idx">
      <GalleryVpic v-if="isShowV(imgInfo.layout)" v-bind="imgInfo" />
      <GalleryHpic v-else v-bind="imgInfo" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { width, height } = useWindowSize()
const imgList = [
  {
    src: "/img/gallery/2022_bj_red_leaf.jpeg",
    alt: "地坛红叶(Red Leaves in Ditan Park)",
    date: '2022.11',
    place: "Photoed at Beijing, Ditan Park",
  },
  {
    src: "/img/gallery/2022_bj_tree.jpeg",
    alt: "秋日的地坛 (Ditan park in Autumn)",
    date: '2022.11',
    place: "Photoed at Beijing, Ditan Park",
  },
  {
    src: "/img/gallery/2022_bj_child.jpeg",
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
    layout: 'v'
  },
  {
    src: "/img/kidDog.jpeg",
    alt: "The Kid and His Friend",
    date: '2020.04',
    place: "Photoed at Bristol Brandon hill",
  },
  {
    src: "/img/park.jpeg",
    alt: "A Chair in Spring",
    date: '2020.04',
    place: "Photoed at Bristol Brandon hill",
    detail: "春日的布里斯托，落英缤纷，美不胜收"
  },
]

const isShowV = (layout: string) => {
  if (layout === 'v' && width.value > 640) {
    return true
  } else {
    return false
  }
}
</script>