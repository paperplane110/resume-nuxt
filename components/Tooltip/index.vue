<template>
  <div>
    <div ref="outter" @mouseenter="showTip" @mouseleave="hideTip" @focusin="showTip" @focusout="hideTip">
      <slot name="trigger"></slot>
    </div>
    <div ref="inner"
      class="opacity-0 inline-block font-bold py-1 px-2 border border-gray-50 rounded-lg shadow-nmd transition-opacity"
      :class="isShow ? 'opacity-100' : 'opacity-0'">
      <slot name="tooltip">tips</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createPopper } from '@popperjs/core'
import type { Placement } from '@popperjs/core'

type tooltipProps = {
  placement?: Placement;
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
      placement: props.placement,
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
