<script setup lang="ts">
withDefaults(defineProps<{ title?: string }>(), { title: "Instructions for Claude" });
</script>

<template>
  <div class="row">
    <div class="text"><h3>{{ title }}</h3><p><slot /></p></div>
    <div class="action"><slot name="action" /></div>
  </div>
</template>

<style scoped>
.row { display: flex; align-items: flex-start; gap: 24px; font-family: Inter, sans-serif; }
.text { flex: 1; display: flex; flex-direction: column; gap: 12px; }
h3 { margin: 0; color: #fff; font: 600 14px/18px Inter, sans-serif; }
p { margin: 0; color: #a1a1aa; font: 400 14px/17px Inter, sans-serif; }
.action { width: 278px; flex: none; }
</style>
