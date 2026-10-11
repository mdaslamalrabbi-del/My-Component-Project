<script setup lang="ts">
defineProps<{ type?: "default" | "padded" | "vertical" | "wave" }>();
const wave = "M0 3" + " q2.5 -1.6 5 0" + " t5 0".repeat(59);
</script>

<template>
  <svg v-if="type === 'wave'" class="wave" role="separator" viewBox="0 0 300 6" preserveAspectRatio="none" fill="none">
    <path :d="wave" stroke="#272729" />
  </svg>
  <div v-else role="separator" :class="['divider', type ?? 'default']" />
</template>

<style scoped>
.divider { height: 1px; background: #272729; }
.padded { margin: 0 8px; }
.vertical { width: 1px; height: 24px; margin: 8px 0; }
.wave { display: block; width: 100%; height: 6px; }
</style>
