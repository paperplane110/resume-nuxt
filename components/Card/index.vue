<template>
  <div class="rounded-1rem flex flex-col transition-all duration-300 transform" :class="styleList">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="flex-1">
      <slot name="body">body</slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    default: 'shadow',
    validator(value: string) {
      return ['shadow', 'flat', 'bordered'].includes(value)
    }
  },
  isHoverable: {
    type: Boolean,
    default: false
  }
})

const styleList = computed(() => {
  const styles = []
  if (props.variant === 'flat') {
    styles.push('bg-gray-100')
  } else if (props.variant === 'bordered') {
    styles.push('border')
  } else {
    styles.push('shadow-nsm')
  }
  if (props.isHoverable) styles.push('hover:(shadow-xl -translate-y-2px)')
  return styles
})

</script>