<script setup lang="ts">
import { ArrowUp, Square } from "lucide-vue-next";
defineProps<{ state?: "send" | "pause" | "disabled" }>();
</script>

<template>
  <button :class="['send', state ?? 'send']" :disabled="state === 'disabled'" :aria-label="state === 'pause' ? 'Stop' : 'Send'">
    <Square v-if="state === 'pause'" :size="20" :stroke-width="1.25" />
    <ArrowUp v-else :size="state === 'disabled' ? 20 : 16" :stroke-width="state === 'disabled' ? 1.25 : 1" />
  </button>
</template>

<style scoped>
.send { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; padding: 0; border: 0; border-radius: 8px; background: #272729; color: #d2cfd9; cursor: pointer; }
.send.send { border: 1px solid transparent; color: #fff; background: linear-gradient(#9c86ff, #9c86ff) padding-box, linear-gradient(135deg, #0718d2, #cf8bff 48%, #a4abff) border-box; }
.send.disabled { color: #6c6a64; cursor: not-allowed; }
</style>
