<template>
  <div
    class="bg-gray-100 rounded-1rem flex flex-col transition-all duration-300 hover:shadow-xl"
  >
    <div class="card-header">
      <slot name="header">header</slot>
    </div>
    <div class="flex-1">
      <slot name="body">body</slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
