<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
withDefaults(defineProps<{ label?: string }>(), { label: "New task" });
</script>

<template><button class="dd">{{ label }}<ChevronDown :size="12" :stroke-width="1.5" /></button></template>

<style scoped>
.dd { display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 10px 0 12px; border: 0; border-radius: 8px; background: #f7f5fa; color: #121113; font: 400 14px/20px Inter, sans-serif; cursor: pointer; }
</style>
