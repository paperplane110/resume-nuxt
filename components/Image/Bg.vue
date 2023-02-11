<template>
    <div ref="wrapper" class="flex justify-center items-center bg-center bg-no-repeat bg-cover">
        <ImageBlur class="min-w-full min-h-full object-cover transition-opacity duration-500" :hash="props.hash"
            :class="onLoaded ? 'opacity-0' : 'opacity-100'" />
    </div>
</template>

<script setup lang='ts'>

const props = defineProps<{
    src: string
    hash: string
}>()

const wrapper = ref(null)
const onLoaded = ref(false)

onMounted(() => {
    // Load the bg-image as Image firstly
    const bgImage = new Image()
    bgImage.onload = () => {
        // when image full loaded, pass it to bg-image
        wrapper.value.style.backgroundImage = `url(${props.src})`
        onLoaded.value = true
    }
    bgImage.src = props.src
})

</script>