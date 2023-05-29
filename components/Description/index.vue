<template>
  <div class="flex my-4 w-full gap-4 <md:(flex-col-reverse)" :class="reverseSection">
    <!-- <div class="flex items-center" :style="imgAreaStyle">
      <img class="rounded-2xl transition-all hover:(rounded-4xl)" :src="props.src" alt="images" />
    </div> -->
    <ImageBg class="rounded-2xl overflow-hidden transition-all hover:(rounded-4xl)" :style="imgAreaStyle"
      v-bind="props" />
    <div class="p-4 <md:(p-0 mb-2)" :style="textAreaStyle">
      <slot>
        <Text>Hi there!</Text>
        <Text h3>Dignissimos asperiores</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          fugit earum voluptas officia, quasi saepe et commodi, dolores cumque
          quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet
          repellendus
        </Text>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'

const props = defineProps({
  src: {
    type: String,
    default: '/img/sample.jpg',
  },
  hash: {
    type: String,
    default: 'L=IrELWBofWB~qWBj[ayt7Rjj[j['
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  imgSize: {
    type: Number,
    default: 1,
  },
  textSize: {
    type: Number,
    default: 1,
  },
})

const reverseSection = computed(() => {
  if (props.reverse) {
    return 'flex-row-reverse <sm:(flex-col-reverse)'
  } else return ''
})

const imgAreaStyle = computed(() => {
  return {
    flex: props.imgSize,
  }
})

const textAreaStyle = computed(() => {
  return {
    flex: props.textSize,
  }
})
</script>
