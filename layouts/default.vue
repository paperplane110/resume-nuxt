<template>
  <div class="grid grid-rows-[auto,1fr,auto] min-h-screen text-left justify-center">
    <div class="mx-auto px-2rem w-screen-lg <lg:w-100vw <sm:(my-0 px-0)">
      <NavBar />
    </div>
    <div class="mx-auto px-2rem <lg:w-100vw">
      <slot />
    </div>
    <Footer />
  </div>
</template>
