<template>
  <div>
    <Card variant="bordered" class="group hover:(border-purple-500)">
      <template #body>
        <div class="flex items-center h-full px-4 py-6 gap-6" :class="btn.iconSide">
          <div class="flex-center transition-all transform group-hover:(text-purple-500 translate-x-0)"
            :class="btn.iconMv">
            <font-awesome-icon :icon="['fas', btn.icon]" />
          </div>
          <div>
            <slot />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    validator(value: string) {
      return ["prev", "next"].includes(value);
    }
  }
})

const btn = computed(() => {
  if (props.type === 'prev') {
    return {
      iconSide: "flex-row",
      iconMv: "translate-x-2",
      icon: "arrow-left"
    }
  }
  else {
    return {
      iconSide: "flex-row-reverse",
      iconMv: "-translate-x-2",
      icon: "arrow-right"
    }
  }
})
</script>