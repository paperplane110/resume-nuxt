<template>
    <div class="grid grid-rows-[auto,1fr,auto] min-h-screen text-left justify-center">
        <NavBar />
        <div class="w-screen-md">
            <slot />
        </div>
        <Footer />
    </div>
</template>

