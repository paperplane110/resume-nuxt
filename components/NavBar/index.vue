<template>
  <div class="h-18 w-full flex justify-between items-center">
    <NuxtLink to="/">
      <div id="icon" class="flex-center w-12 h-12 mr-3 transition-all duration-200 filter" :class="homeActivatedStyles">
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50C100 59.8891 97.0675 69.5561 91.5735 77.7785C86.0794 86.001 78.2705 92.4096 69.1342 96.194C59.9979 99.9784 49.9445 100.969 40.2455 99.0393C30.5464 97.11 21.6373 92.348 14.6447 85.3553L50 50H100Z"
            fill="#6481D1" />
          <path
            d="M100 0C100 6.56609 98.7067 13.0679 96.194 19.1342C93.6812 25.2005 89.9983 30.7124 85.3553 35.3553C80.7124 39.9983 75.2005 43.6812 69.1342 46.194C63.0679 48.7067 56.5661 50 50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 0H100Z"
            fill="#718DF3" fill-opacity="0.35" />
          <path d="M50 0H100V50H50V0Z" fill="#3A67DB" fill-opacity="0.48" />
        </svg>
      </div>
    </NuxtLink>
    <div id="links" class="flex gap-4 px-3">
      <NavItemB icon="fa-vial" to="/projects" :activated="routeActivated" />
      <NavItemB icon="fa-feather-pointed" to="/article" :activated="routeActivated" />
      <NavItemB icon="fa-camera-retro" to="/gallery" :activated="routeActivated" />
      <NavItemB icon="fa-icons" to="/components" :activated="routeActivated" />
    </div>
    <div id="links" class="flex gap-4 pl-3">
      <NavItemB icon="fa-scroll" to="/about" :activated="routeActivated" />
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
