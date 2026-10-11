<script setup lang="ts">
defineProps<{ initial: string; theme?: "dark" | "light" }>();
</script>

<template>
  <span :class="['avatar', theme ?? 'dark']" aria-hidden="true">{{ initial.slice(0, 1).toUpperCase() }}</span>
</template>

<style scoped>
.avatar { display: inline-grid; place-items: center; width: 32px; height: 32px; border-radius: 50%; font: 600 12px/16px Inter, sans-serif; }
.dark { background: #272729; color: #fff; }
.light { background: #f7f5fa; color: #121113; }
</style>
