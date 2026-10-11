<script setup lang="ts">
import { ChevronDown, FolderOpen } from "lucide-vue-next";
withDefaults(defineProps<{ label?: string; leftIcon?: boolean; rightIcon?: boolean; outlined?: boolean }>(),
  { leftIcon: true, rightIcon: true });
</script>

<template>
  <span :class="['chip', { outlined }]">
    <FolderOpen v-if="leftIcon" :size="12" :stroke-width="1.5" />
    {{ label }}
    <ChevronDown v-if="rightIcon" :size="12" :stroke-width="1.5" />
  </span>
</template>

<style scoped>
.chip { display: inline-flex; align-items: center; gap: 6px; height: 20px; padding: 0 8px; border-radius: 4px; background: #272729; color: #d2cfd9; font: 500 11px/16px Inter, sans-serif; }
.chip.outlined { box-shadow: inset 0 0 0 1px #333137; }
</style>
