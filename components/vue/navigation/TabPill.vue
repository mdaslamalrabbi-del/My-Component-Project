<script setup lang="ts">
defineProps<{ items: string[]; modelValue: string }>();
defineEmits<{ "update:modelValue": [v: string] }>();
</script>

<template>
  <div class="tpg" role="tablist">
    <button v-for="i in items" :key="i" role="tab" type="button" :aria-selected="i === modelValue" :class="['tp', { on: i === modelValue }]" @click="$emit('update:modelValue', i)">{{ i }}</button>
  </div>
</template>

<style scoped>
.tpg { display: inline-flex; gap: 16px; padding: 8px; border-radius: 12px; background: #1c1b19; }
.tp { all: unset; cursor: pointer; padding: 6px 12px; border-radius: 8px; color: #fff; font: 14px Inter, system-ui, sans-serif; }
.tp.on { background: #141311; }
</style>
