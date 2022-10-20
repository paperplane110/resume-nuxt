<template>
  <blockquote class="my-4">
    <Card variant="flat">
      <template #body>
        <div class="px-4 py-4">
          <div class="pl-4 border-l-2">
            <slot />
          </div>
        </div>
      </template>
    </Card>
  </blockquote>
</template>