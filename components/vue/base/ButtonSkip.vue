<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
withDefaults(defineProps<{ kind?: "button" | "text"; showLeft?: boolean; showRight?: boolean }>(), { kind: "button" });
</script>

<template>
  <button :class="['skip', kind]">
    <ChevronDown v-if="showLeft" :size="10" :stroke-width="1.5" />
    <slot>Skip</slot>
    <ChevronDown v-if="showRight" :size="10" :stroke-width="1.5" />
  </button>
</template>

<style scoped>
.skip { display: inline-flex; align-items: center; gap: 4px; height: 24px; padding: 0 12px; border: 0; border-radius: 6px; color: #fff; font: 400 12px/16px Inter, sans-serif; cursor: pointer; }
.skip.button { background: #272729; } .skip.text { background: transparent; font-weight: 500; }
.skip svg { color: #a1a1aa; }
</style>
