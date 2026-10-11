<script setup lang="ts">
defineProps<{ selected?: boolean }>();
</script>

<template><div role="option" :aria-selected="selected" :class="['o', { on: selected }]"><slot /></div></template>

<style scoped>
.o { display: flex; align-items: center; height: 26px; padding: 0 12px; border-radius: 4px; color: #d2cfd9; font: 400 14px Inter, sans-serif; cursor: pointer; }
.o:hover, .o.on { background: #27272a; } .o.on { color: #fff; }
</style>
