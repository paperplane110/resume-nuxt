<template>
    <div>
        <Text hero>{{ props.title }}</Text>
    </div>

</template>

<script setup lang='ts'>
type titleProps = {
    title: string,
    date: string,
}
const props = defineProps<titleProps>()
</script>
