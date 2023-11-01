<template>
  <div>
    <iframe ref="preview"></iframe>
  </div>
</template>

<script setup lang="ts">
import { loadSandpackClient } from '@codesandbox/sandpack-client';
import type { ClientOptions, SandboxSetup, SandpackClient } from '@codesandbox/sandpack-client';
import type { PropType } from 'vue'

const props = defineProps({
  info: {
    type: Object as PropType<SandboxSetup>,
    required: true,
  },
  options: {
    type: Object as PropType<ClientOptions>,
    required: false,
    default: () => {
      return {};
    },
  },
});

const preview = ref<HTMLIFrameElement | null>(null);
let client: SandpackClient | null = null;

console.log("setup")

onMounted(() => {
  if (!preview.value) {
    console.error('preview is null')
    return;
  }
  console.log("mount sandbox")
  loadSandpackClient(preview.value, props.info, props.options)
    .then((cli) => {
      client = cli
    });
  console.log("mounted sandbox")
});

watch(() => props.info, (info) => {
  if (!client) {
    return;
  }
  client.updateSandbox(info);
});
</script>

<style scoped>
iframe {
  width: 100%;
  height: 400px;
}
</style>
