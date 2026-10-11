<script setup lang="ts">
defineProps<{ tabs: { id: string; label: string; count?: number }[]; modelValue: string }>();
defineEmits<{ "update:modelValue": [id: string] }>();
</script>

<template>
  <div class="tb" role="tablist">
    <button v-for="t in tabs" :key="t.id" role="tab" type="button" :aria-selected="t.id === modelValue" :class="{ on: t.id === modelValue }" @click="$emit('update:modelValue', t.id)">
      {{ t.label }}<span v-if="t.count != null"> · {{ t.count }}</span>
    </button>
  </div>
</template>

<style scoped>
.tb { display: flex; border-bottom: 1px solid #333137; }
button { all: unset; cursor: pointer; padding: 8px 12px; margin-bottom: -1px; border-bottom: 2px solid transparent; color: #71717a; font: 500 14px Inter, system-ui, sans-serif; }
button.on { color: #fff; border-bottom-color: #fff; }
</style>
