<script setup lang="ts">
defineProps<{ label: string; active?: boolean; preview?: boolean }>();
defineEmits<{ select: []; close: [] }>();
</script>

<template>
  <div role="tab" :aria-selected="active" class="tab" :class="{ active, preview }">
    <button type="button" class="main" @click="$emit('select')"><slot name="icon" /><span>{{ label }}</span></button>
    <button type="button" class="x" :aria-label="`Close ${label}`" @click="$emit('close')">✕</button>
  </div>
</template>

<style scoped>
.tab { display: flex; align-items: center; gap: 6px; height: 22px; max-width: 197px; padding: 0 8px 0 6px; border-radius: 6px; color: #D2CFD9; font: 400 14px Inter, sans-serif; }
.tab.active { background: #27272A; color: #fff; }
.tab.preview span { font-style: italic; }
.main { display: flex; align-items: center; gap: 6px; min-width: 0; background: none; border: 0; color: inherit; font: inherit; cursor: pointer; }
.main span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.x { background: none; border: 0; color: #A1A1AA; font-size: 12px; cursor: pointer; }
</style>
