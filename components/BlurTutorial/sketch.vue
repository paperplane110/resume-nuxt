<template>
  <div class="flex justify-center">
    <div id="container" class="relative w-300px h-200px">
      <ImageBlur id="blur" class="absolute top-0 w-300px h-200px z-10" hash="LIA_9M%3L~-.yYRO8{OGuPX8ITo#" />
      <ImageBg id="image" class="absolute top-0 w-300px h-200px" src="/img/article_cover/blur_cover.jpg"
        hash="LIA_9M%3L~-.yYRO8{OGuPX8ITo#" />
    </div>
  </div>
</template>

<style scoped>
#blur,
#image {
  transition: transform 500ms, opacity 500ms;
}

#container:hover #blur {
  transition: transform 500ms, opacity 500ms;
  opacity: 20%;
  transform: translateX(30px) rotateY(-10deg);
}

#container:hover #image {
  transition: transform 500ms;
  transform: translateX(100px) rotateY(-20deg) scale(0.9);
}
</style>
