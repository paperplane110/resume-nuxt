<template>
  <div class="inline-block cursor-help">
    <div class="inline outter" ref="outter" @mouseenter="showTip" @mouseleave="hideTip" @focusin="showTip"
      @focusout="hideTip">
      <slot></slot><sup class="font-bold text-pink-600">?</sup>
    </div>
    <div ref="inner"
      class="opacity-0 inline-block text-white py-1 px-2 bg-slate-700 rounded-lg shadow-nmd transition-opacity"
      :class="isShow ? 'opacity-100' : 'opacity-0'">
      <slot name="tooltip">{{ props.tip }}</slot>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { createPopper } from '@popperjs/core'

type tooltipProps = {
  tip: string
  x?: number
  y?: number
}

const props = defineProps<tooltipProps>()

const outter = ref<HTMLElement | null>(null)
const inner = ref(null)

onMounted(() => {
  const poppercorn = outter.value
  const tooltip = inner.value

  if (poppercorn && tooltip) {
    createPopper(poppercorn, tooltip, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [props.x ? props.x : 0, props.y ? props.y : 0]
          }
        }
      ]
    })
  }
})

const isShow = ref(false)
const showTip = () => {
  isShow.value = true
}
const hideTip = () => {
  isShow.value = false
}
</script>
