<template>
  <div
    class="my-1rem mx-auto px-2rem w-screen-lg h-15 <lg:w-100vw <sm:(my-0 px-0)"
  >
    <div
      class="h-full rounded-xl bg-gray-100 flex justify-between items-center <sm:(rounded-none)"
    >
      <div class="px-1.5rem">
        <NuxtLink to="/">
          <img
            class="w-70px transition-all duration-200 filter hover:(contrast-150)"
            :src="TianyuIcon"
          />
        </NuxtLink>
      </div>
      <div class="flex justify-center items-center pr-2">
        <NavItem
          v-for="(linkProps, idx) in linkList"
          :key="idx"
          :icon="linkProps.icon"
          :to="linkProps.to"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TianyuIcon from '/svg/yty.svg'
import NavItem from './NavItem.vue'

const linkList = [
  {
    icon: 'cubes',
    to: '/components',
  },
  {
    icon: 'user',
    to: '/about',
  },
]
</script>

<style scope></style>
