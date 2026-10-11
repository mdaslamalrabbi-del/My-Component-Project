<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
withDefaults(defineProps<{ text: string; size?: "large" | "default"; showLeft?: boolean; showRight?: boolean }>(),
  { size: "large", showLeft: true, showRight: true });
</script>

<template>
  <button :class="['ow', size]">
    <ChevronDown v-if="showLeft" class="ic" :stroke-width="1.25" />
    <span>{{ text }}</span>
    <ChevronDown v-if="showRight" class="ic" :stroke-width="1.25" />
  </button>
</template>

<style scoped>
.ow { display: inline-flex; align-items: center; gap: 8px; padding: 0 12px; border: 0; background: #272729; color: #fff; font: 500 12px/16px Inter, sans-serif; cursor: pointer; }
.ow.large { height: 32px; border-radius: 8px; } .ow.large .ic { width: 16px; height: 16px; }
.ow.default { height: 24px; border-radius: 6px; } .ow.default .ic { width: 12px; height: 12px; }
.ic { color: #d2cfd9; flex: none; }
</style>
