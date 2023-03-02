<template>
    <div class="my-6 px-4 py-3 border rounded-lg" :class="[type]">
        <Text>{{ symbol }}{{ title ? title : type?.toUpperCase() }}</Text>
        <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
</template>

<script setup lang='ts'>
const props = defineProps({
    type: {
        type: String
    },
    title: {
        type: String
    }
})

const symbol = computed(() => {
    if (props.type === "tip") return "✨"
    else if (props.type === "info") return "💡"
    else if (props.type === "warning") return "⚠️"
    else if (props.type === "error") return "❗️"
})
</script>

<style scoped>
.tip {
    @apply bg-green-100 border-green-200 text-green-500;
}

.info {
    @apply bg-blue-100 border-blue-200 text-blue-500;
}

.warning {
    @apply bg-amber-100 border-amber-200 text-amber-500;
}

.error {
    @apply bg-red-100 border-red-200 text-red-500;
}
</style>