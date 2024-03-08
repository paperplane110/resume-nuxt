<template>
  <Menu as="div" class="relative inline-block">
    <MenuButton
      class="group w-12 h-12 flex-center rounded-1rem transition-all transform hover:(bg-gradient-to-br from-yellow-300 to-orange-400) focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
      <Icon name="material-symbols:more-vert" class="text-xl group-hover:text-white dark:text-white" />
    </MenuButton>

    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
      <MenuItems
        class="absolute right-0 mt-2 w-42 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <!-- <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
          <div>
            <NavBarColorSwitch />
            Theme:
          </div>
          </MenuItem>
        </div> -->

        <div class="px-1 py-1">
          <MenuItem v-for="(linkInfo, idx) in linkList" :key="idx" v-slot="{ active, close }">
          <button :class="[
              active ? 'bg-[#4f71d1] text-white' : 'text-gray-900',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
            ]">
            <NuxtLink class="w-full text-left" :href="linkInfo.to" @click="close">
              <Icon :name="linkInfo.icon" :class="[active ? 'text-blue-100' : 'text-[#4f71d1]', 'ml-1 mr-2']" />
              {{ linkInfo.text }}
            </NuxtLink>
          </button>
          </MenuItem>
        </div>

        <div class="px-1 py-1">
          <MenuItem v-for="(linkInfo, idx) in linkListPerson" :key="idx" v-slot="{ active, close }">
          <button :class="[
              active ? 'bg-[#4f71d1] text-white' : 'text-gray-900',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
            ]">
            <NuxtLink class="w-full text-left" :href="linkInfo.to" @click="close">
              <Icon :name="linkInfo.icon" :class="[active ? 'text-blue-100' : 'text-[#4f71d1]', 'ml-1 mr-2']" />
              {{ linkInfo.text }}
            </NuxtLink>
          </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const linkList = [
  {
    to: "/projects",
    text: "Project",
    icon: "fa6-solid:vial"
  },
  {
    to: "/articles",
    text: "Articles",
    icon: "fa6-solid:feather-pointed"
  },
  {
    to: "/gallery",
    text: "Gallery",
    icon: "fa6-solid:camera-retro"
  },
  {
    to: "/components",
    text: "Components",
    icon: "fa6-solid:icons"
  },

]

const linkListPerson = [
  {
    to: "/about",
    text: "About",
    icon: "fa6-solid:user-tie"
  },
  {
    to: "https://github.com/paperplane110",
    text: "Github",
    icon: "fa6-brands:github"
  },
]
</script>
