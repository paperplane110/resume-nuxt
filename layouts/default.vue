<template>
  <div class="grid grid-rows-[auto,1fr,auto] min-h-screen text-left justify-center overflow-hidden">
    <div
      class="-z-10 absolute bottom-auto left-auto right-50vw top-0 h-[500px] w-full lg:(w-[1000px]) transform translate-x-[50%] -translate-y-[60%] rounded-full bg-indigo-300/50 opacity-50 filter blur-80px">
    </div>
    <div class="mx-auto px-2rem w-screen-lg <lg:w-100vw <sm:(my-0 px-0)">
      <NavBar />
    </div>
    <div class="mx-auto px-2rem <lg:w-100vw">
      <slot />
    </div>
    <Footer />
  </div>
</template>
