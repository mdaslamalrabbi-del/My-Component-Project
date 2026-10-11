<script setup lang="ts">
defineProps<{ tone?: "accent" | "normal" }>();
</script>

<template><code :class="['code', tone ?? 'accent']"><slot /></code></template>

<style scoped>
.code { display: inline-flex; align-items: center; height: 16px; padding: 0 4px; border-radius: 4px; background: #272729; box-shadow: inset 0 0 0 1px #272729; font: 400 12px/16px Inter, sans-serif; }
.accent { color: #ff9492; } .normal { color: #d2cfd9; }
</style>
