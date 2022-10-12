<template>
    <div class="my-1rem mx-auto w-screen-md h-15 rounded-xl bg-gray-200 flex justify-between items-center">
        <div>icon</div>
        <div class="flex justify-center items-center pr-2">
            <NavItem v-for="(linkProps, idx) in linkList" :key="idx" :icon='linkProps.icon' :to='linkProps.to' />
        </div>
    </div>

</template>

<script setup lang='ts'>
import NavItem from './NavItem.vue'

const linkList = [
    {
        icon: 'cubes',
        to: '/components'
    },
    {
        icon: 'user',
        to: '/about'
    }
]

</script>

<style scope>

</style>