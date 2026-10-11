<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
defineProps<{ pressed?: boolean }>();
</script>

<template>
  <button :class="['caret', { on: pressed }]" aria-label="Toggle"><ChevronDown :size="10" :stroke-width="1.5" /></button>
</template>

<style scoped>
.caret { display: flex; align-items: center; justify-content: center; width: 10px; height: 10px; padding: 0; border: 0; border-radius: 12px; background: transparent; color: #a1a1aa; cursor: pointer; }
.caret:active, .caret.on { height: 16px; background: #272729; }
</style>
