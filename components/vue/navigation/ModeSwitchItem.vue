<script setup lang="ts">
defineProps<{ label?: string; active?: boolean; large?: boolean }>();
defineEmits<{ click: [] }>();
</script>

<template>
  <button type="button" role="tab" :aria-selected="active" class="item" :class="{ active, large }" @click="$emit('click')">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.item { display: inline-flex; align-items: center; justify-content: center; height: 22px; padding: 0 12px; border: 0; border-radius: 4px; background: none; color: #D2CFD9; font: 400 12px Inter, sans-serif; cursor: pointer; }
.item.active { background: #27272A; color: #fff; font-weight: 500; }
.item.large { height: 26px; padding: 0 16px; font-size: 14px; font-weight: 400; }
</style>
