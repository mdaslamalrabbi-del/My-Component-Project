<script setup lang="ts">
defineProps<{ placeholder?: string; rows?: number }>();
const model = defineModel<string>({ default: "" });
</script>

<template><textarea v-model="model" :placeholder="placeholder" :rows="rows ?? 3" /></template>

<style scoped>
textarea { display: block; width: 100%; box-sizing: border-box; min-height: 93px; padding: 12px; resize: vertical; border: 1px solid transparent; border-radius: 8px; background: #27272a; color: #fff; font: 400 14px Inter, sans-serif; outline: 0; }
textarea::placeholder { color: #6c6a64; } textarea:focus { border-color: #333137; }
</style>
