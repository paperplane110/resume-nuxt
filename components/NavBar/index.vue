<template>
  <div class="h-18 w-full flex justify-between items-center">
    <div id="links" class="flex gap-4">
      <NuxtLink to="/">
        <div class="group w-12 h-12 flex-center rounded-1rem transition-all transform active:(scale-95)">
          <Icon name="fa6-solid:circle-notch" class="rotating text-2xl group-hover:(text-indigo-500)" />
        </div>
      </NuxtLink>
      <NavBarButtonB icon="" to="/playground" tooltip="???" :activated="routeActivated" />
    </div>
    <div id="links" class="flex gap-4 px-3">
      <NavBarButtonB icon="fa6-solid:vial" to="/projects" tooltip="Projects" :activated="routeActivated" />
      <NavBarButtonB icon="fa6-solid:feather-pointed" to="/article" tooltip="Articles" :activated="routeActivated" />
      <NavBarButtonB icon="fa6-solid:camera-retro" to="/gallery" tooltip="Gallery" :activated="routeActivated" />
      <NavBarButtonB icon="fa6-solid:icons" to="/components" tooltip="Compoents" :activated="routeActivated" />
      <NavBarButtonB icon="fa6-solid:briefcase" to="/about" tooltip="CV" :activated="routeActivated" />
    </div>
    <div id="links" class="flex items-center gap-4 pl-3">
      <NavBarButtonB icon="fa6-brands:git" to="https://github.com/paperplane110" tooltip="Github" target="_blank"
        :activated="routeActivated" />
      <NavBarColorSwitch />
    </div>
  </div>
</template>

<script setup lang="ts">
const routeActivated = computed(() => {
  const route = useRoute()
  const rootRoute = `/${route.path.split('/')[1]}`
  return rootRoute
})

const homeActivatedStyles = computed(() => {
  if (routeActivated.value === '/') {
    return "drop-shadow-lg"
  } else return ""
})
</script>

<style scoped>
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.rotating {
  animation: rotating 2s cubic-bezier(0.15, 0.82, 0.165, 1) infinite;
}
</style>
