<template>
  <div>
    <br />
    <Text hero>Playground.</Text>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>

    <p>Color mode: {{ $colorMode.preference }}</p>
    <SandBox />
  </div>
</template>

<script setup lang="ts">

</script>
