<template>
    <wrapper :style="style">
        <svg class="sparkle" :width="size" :height="size" viewBox="0 0 373 373" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M186.5 0C186.5 0 196.79 96.0463 236.872 136.128C276.954 176.21 373 186.5 373 186.5C373 186.5 276.954 196.79 236.872 236.872C196.79 276.954 186.5 373 186.5 373C186.5 373 176.21 276.954 136.128 236.872C96.0463 196.79 0 186.5 0 186.5C0 186.5 96.0463 176.21 136.128 136.128C176.21 96.0463 186.5 0 186.5 0Z"
                :fill="color" />
        </svg>
    </wrapper>
</template>
  
<script setup lang="ts">
type sparkleProps = {
    size: number
    style: object
    color: string
}

const props = defineProps<sparkleProps>()
</script>
  
<style scoped>
wrapper {
    position: absolute;
    pointer-events: none;
    z-index: 2;
    animation: growAndShrink 1000ms ease-in-out forwards;
}

.sparkle {
    animation: spin 1000ms linear forwards;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(180deg);
    }
}

@keyframes growAndShrink {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}
</style>
  