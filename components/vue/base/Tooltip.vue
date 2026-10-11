<script setup lang="ts">
withDefaults(defineProps<{ width?: number }>(), { width: 189 });
</script>

<template><div class="tooltip" role="tooltip" :style="{ width: width + 'px' }"><slot /></div></template>

<style scoped>
.tooltip { padding: 8px; border: 1px solid #272729; border-radius: 6px; background: #181715; color: #d2cfd9; font: 500 11px/16px Inter, sans-serif; }
</style>
