<template>
    <a
        :class="`inline-block px-0.3rem rounded-1rem transition-all transform hover:(text-white -translate-y-2px cursor-pointer) active:(translate-y-1px) ${type}`">
        <slot></slot>
    </a>
</template>
  
<script setup lang="ts">
defineProps({
    type: {
        type: String,
        default: "primary",
        validator(value: string) {
            return ["primary", "secondary", "success", "warning", "error"].includes(
                value
            );
        },
    },
});
</script>
  
<style scope>
.primary {
    @apply text-primary hover: bg-purple-500;
}

.secondary {
    @apply text-secondary hover: bg-indigo-500;
}

.success {
    @apply text-teal-500 hover: bg-teal-500;
}

.warning {
    @apply text-orange-500 hover: bg-orange-500;
}

.error {
    @apply text-red-500 hover: bg-red-500;
}

/* @mixin linkColor($color: $primary-color) {
    display: inline-block;
    color: $color;

    padding: 0 0.3rem 0.1rem 0.3rem;
    border-radius: 1rem;
    transition: all 0.3s;

    &:hover {
        color: white;
        background-color: $color;
        cursor: pointer;
        transform: translateY(-3px);
        // filter: drop-shadow(0px 3px 10px $color);
    }
}

.primary {
    @include linkColor($color: $primary-color);
}

.secondary {
    @include linkColor($color: $secondary-color);
}

.success {
    @include linkColor($color: $success-color);
}

.warning {
    @include linkColor($color: $warning-color);
}

.error {
    @include linkColor($color: $error-color);
} */
</style>