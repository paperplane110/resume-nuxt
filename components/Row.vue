<template>
    <div class="flex items-center" :class="props.css">
        <slot></slot>
    </div>

</template>

<script setup lang='ts'>
const props = defineProps({
    css: {
        type: String,
        default: ""
    }
})
</script>

<style scope>

</style>