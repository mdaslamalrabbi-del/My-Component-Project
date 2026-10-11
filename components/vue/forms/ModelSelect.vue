<script setup lang="ts">
defineProps<{ model: string; effort?: string }>();
</script>

<template>
  <button type="button" class="ms">{{ model }}<span v-if="effort">{{ effort }}</span></button>
</template>

<style scoped>
.ms { display: inline-flex; align-items: center; gap: 6px; height: 20px; padding: 4px; border: 0; border-radius: 4px; background: none; color: #fff; font: 400 12px Inter, sans-serif; cursor: pointer; }
.ms:hover { background: #27272a; } span { color: #a1a1aa; }
</style>
