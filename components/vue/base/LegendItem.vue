<script setup lang="ts">
withDefaults(defineProps<{ color?: string; label: string; value?: string }>(), { color: "#9c86ff" });
</script>

<template>
  <div class="legend">
    <i :style="{ background: color }" />
    <span>{{ label }}<b v-if="value">{{ value }}</b></span>
  </div>
</template>

<style scoped>
.legend { display: flex; align-items: center; gap: 12px; font: 400 14px/20px Inter, sans-serif; }
i { width: 10px; height: 10px; border-radius: 50%; flex: none; }
span { display: flex; gap: 10px; color: #d2cfd9; } b { font-weight: 400; color: #a1a1aa; }
</style>
