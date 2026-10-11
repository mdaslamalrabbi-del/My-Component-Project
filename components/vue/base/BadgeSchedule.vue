<script setup lang="ts">
import { Clock } from "lucide-vue-next";
defineProps<{ label: string }>();
</script>

<template><span class="badge"><Clock :size="8" :stroke-width="1.5" />{{ label }}</span></template>

<style scoped>
.badge { display: inline-flex; align-items: center; gap: 4px; height: 18px; padding: 0 6px 0 4px; border-radius: 4px; background: #1b4721; color: #3fb950; font: 400 12px/16px Inter, sans-serif; }
</style>
