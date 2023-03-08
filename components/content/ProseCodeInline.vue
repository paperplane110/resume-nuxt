<template>
  <code class="text-purple-500 dark:text-light-100"><slot /></code>
</template>

<style scoped>
code {
  font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
}

code::before {
  content: '`';
}

code::after {
  content: '`';
}
</style>
