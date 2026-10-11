<script setup lang="ts">
withDefaults(defineProps<{ label?: string; value?: string }>(), { label: "Sort by", value: "Next run" });
</script>

<template>
  <button type="button" class="sort" aria-haspopup="listbox">
    <span class="l">{{ label }}</span><span class="v">{{ value }}</span>
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6" /></svg>
  </button>
</template>

<style scoped>
.sort { display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 10px 0 12px; border: 0; border-radius: 8px; background: #27272a; font: 400 14px Inter, sans-serif; cursor: pointer; color: #a1a1aa; }
.v { color: #fff; }
</style>
