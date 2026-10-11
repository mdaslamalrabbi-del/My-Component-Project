<script setup lang="ts">
defineProps<{ label: string }>();
const model = defineModel<boolean>({ default: false });
</script>

<template>
  <label class="field"><Checkbox v-model="model" /><span>{{ label }}</span></label>
</template>

<style scoped>
.field { display: flex; align-items: flex-start; gap: 12px; width: 360px; max-width: 100%; cursor: pointer; }
span { padding-top: 2px; color: #fff; font: 400 14px/20px Inter, sans-serif; }
</style>
