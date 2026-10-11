<script setup lang="ts">
import { TriangleAlert, X } from "lucide-vue-next";
defineProps<{ message: string }>();
defineEmits<{ dismiss: [] }>();
</script>

<template>
  <div class="toast" role="alert">
    <TriangleAlert :size="16" :stroke-width="1.5" />
    <span>{{ message }}</span>
    <button aria-label="Dismiss" @click="$emit('dismiss')"><X :size="16" :stroke-width="1.5" /></button>
  </div>
</template>

<style scoped>
.toast { display: inline-flex; align-items: center; gap: 12px; padding: 8px; border-radius: 6px; background: #5a1a1a; color: #ff9492; font: 600 12px/16px Inter, sans-serif; }
button { display: flex; padding: 0; border: 0; background: none; color: inherit; cursor: pointer; }
</style>
