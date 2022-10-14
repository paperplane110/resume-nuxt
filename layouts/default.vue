<template>
  <div
    class="grid grid-rows-[auto,1fr,auto] min-h-screen text-left justify-center"
  >
    <NavBar />
    <div class="w-screen-lg mx-auto px-2rem <lg:w-100vw">
      <slot />
    </div>
    <Footer />
  </div>
</template>
