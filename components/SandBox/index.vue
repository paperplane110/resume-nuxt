<template>
  <div class="grid grid-cols-2">
    <div>
      <h1>Editor</h1>
    </div>
    <SandBoxPreview :info="info" :options="options" />
  </div>
</template>

<script setup lang='ts'>
const info = {
  files: {
    '/index.html': {
      code: `<!DOCTYPE html>
			<html>
			<body>
			<h1>Hello Sandpack!</h1>
      <h2>Hello from tyyuan</h2>
			<div id="app"></div>
			<script src="src/index.ts" />
			</body>
			</html>`,
    },
    '/index.js': {
      code: `import { v4 as uuidv4 } from 'uuid';
			document.getElementById("app").innerHTML = \`
			<div>
			$\{uuidv4()}
			</div>\``,
    },
  },
  entry: '/index.js',
  dependencies: {
    uuid: 'latest',
  },
}

const options = {
  showOpenInCodeSandbox: true,
  showErrorScreen: true,
  showLoadingScreen: true,
}
</script>
