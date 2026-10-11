<script setup lang="ts">
withDefaults(defineProps<{ bars?: number; color?: string }>(), { bars: 35, color: "#A1A1AA" });
const HEIGHTS = [4, 12, 8, 4, 6]; // repeats 7 times = 35 bars
</script>

<template>
  <div class="wave" aria-hidden="true">
    <span v-for="i in bars" :key="i" :style="{ height: HEIGHTS[(i - 1) % 5] + 'px', background: color }" />
  </div>
</template>

<style scoped>
.wave { display: inline-flex; align-items: center; gap: 4px; height: 12px; padding: 0 4px; }
.wave span { width: 1px; border-radius: 1px; }
</style>
