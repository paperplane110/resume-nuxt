<template>
    <div>
        <br />
        <Text hero>Gallery.</Text>
        <Text>
            From academic to impressionism, from photographs to 3D arts,
            here collects all of my favorite artworks, photos, game scenes, and 3D arts.
            Vibrant green, sweet pink, warmly orange, rustic black & white,
            that's all about <Sparkle rainbow>life
            </Sparkle>.
        </Text>
        <br />
        <div v-for="(imgInfo, idx) in imgList" :key="idx" class="text-right">
            <div class="rounded-2rem overflow-hidden mt-6 mb-2">
                <img :src="imgInfo.src" :alt="imgInfo.alt" />
            </div>
            <div>
                <Text sm>
                    {{ imgInfo.date }} / <b>{{ imgInfo.alt }}</b> / {{ imgInfo.caption }}
                </Text>
                <Text sm class="text-gray-400">{{ imgInfo.detail }}</Text>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const imgList = [
    {
        src: "/img/kidDog.jpeg",
        alt: "The Kid and His Friend",
        date: '2020.04',
        caption: "Photoed at Bristol Brandon hill",
    },
    {
        src: "/img/park.jpeg",
        alt: "A Chair in Spring",
        date: '2020.04',
        caption: "Photoed at Bristol Brandon hill",
        detail: "春日的布里斯托，落英缤纷，美不胜收"
    }
]
</script>