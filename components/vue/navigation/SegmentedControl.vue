<script setup lang="ts">
defineProps<{ items: { value: string; label: string }[]; modelValue: string; iconOnly?: boolean }>();
defineEmits<{ "update:modelValue": [v: string] }>();
</script>

<template>
  <div class="seg" role="tablist">
    <button v-for="it in items" :key="it.value" role="tab" type="button" :aria-selected="it.value === modelValue" :aria-label="it.label"
      :class="['it', { on: it.value === modelValue, ic: iconOnly }]" @click="$emit('update:modelValue', it.value)">
      <slot name="icon" :item="it" /><span v-if="!iconOnly">{{ it.label }}</span>
    </button>
  </div>
</template>

<style scoped>
.seg { display: inline-flex; gap: 6px; padding: 8px; border-radius: 12px; background: #1f1e1b; }
.it { all: unset; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: 32px; padding: 0 16px; box-sizing: border-box;
  border: 1px solid transparent; border-radius: 8px; color: #a09d96; font: 500 14px Inter, system-ui, sans-serif; }
.it.ic { width: 32px; padding: 0; }
.it.on { background: #27272a; border-color: #333137; color: #fff; }
</style>
