<script setup lang="ts">
defineProps<{ label: string; count?: number; active?: boolean }>();
</script>

<template>
  <button role="tab" type="button" :aria-selected="active" :class="['tu', { on: active }]">
    {{ label }}<span v-if="count != null"> · {{ count }}</span>
  </button>
</template>

<style scoped>
.tu { all: unset; cursor: pointer; padding: 8px 12px; border-bottom: 2px solid transparent; color: #52525b; font: 14px Inter, system-ui, sans-serif; }
.tu.on { color: #d2cfd9; border-bottom-color: #a1a1aa; }
</style>
