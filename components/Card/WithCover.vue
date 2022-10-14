<template>
  <Card class="h-300px w-250px bg-no-repeat bg-center bg-cover" :class="props.src">
    <template #header>
      <div class="px-1.5rem pt-5">
        <Text class="text-gray-400" sm>TO EXPORE</Text>
      </div>
    </template>
    <template #body>
      <div class="px-1.5rem">
        <Text h4 class="text-white">The breathtaking scene in nature</Text>
      </div>
    </template>
    <template #footer>
      <div
        class="p-1rem backdrop-filter backdrop-blur-md rounded-b-1rem border-t-gray-400 border-t-1 border-opacity-80">
        <div class="flex justify-between items-center">
          <div>
            <Text sm class="text-gray-300">Travel App </Text>
          </div>
          <div>
            <button class="px-2 py-1 bg-cyan-100 bg-opacity-30 rounded-16px">
              <Text sm b class="text-cyan-500">Download</Text>
            </button>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang='ts'>
type cardWithCoverProps = {
  src: string
  hdivider?: boolean
  hdw?: number
  hdcolor?: string
  fdivider?: boolean
  fdw?: number
  fdcolor: string
}

const props = withDefaults(defineProps<cardWithCoverProps>(), {
  hdivider: false,
  hdw: 1,
  fdivider: false,
  fdw: 1,
})
</script>

<style scope>
.cover {
  background-image: url(/img/iceberg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>