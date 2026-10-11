<script setup lang="ts">
import { Check, ChevronRight } from "lucide-vue-next";
defineProps<{ status: "done" | "caret" | "number"; number?: number }>();
</script>

<template>
  <span v-if="status === 'done'" class="step done"><Check :size="8" :stroke-width="3" /></span>
  <ChevronRight v-else-if="status === 'caret'" class="step" :size="12" :stroke-width="1.5" />
  <span v-else class="step num">{{ number }}</span>
</template>

<style scoped>
.step { display: grid; place-items: center; width: 12px; height: 12px; color: #a1a1aa; }
.done { border-radius: 50%; background: #a1a1aa; color: #181715; }
.num { font: 400 11px/16px Inter, sans-serif; }
</style>
