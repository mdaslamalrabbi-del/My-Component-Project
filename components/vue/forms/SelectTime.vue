<script setup lang="ts">
withDefaults(defineProps<{ options: string[]; type?: "time" | "number" }>(), { type: "number" });
const model = defineModel<string>();
</script>

<template>
  <div :class="['t', type]">
    <select v-model="model" :aria-label="type === 'time' ? 'Time' : 'Number'">
      <option v-for="o in options" :key="o">{{ o }}</option>
    </select>
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6" /></svg>
  </div>
</template>

<style scoped>
.t { position: relative; display: inline-flex; align-items: center; width: 96px; height: 32px; border-radius: 8px; background: #202022; color: #fff; }
.t.time { width: 84px; }
.t:focus-within { box-shadow: 0 0 0 1px #9c86ff; }
select { width: 100%; height: 100%; padding: 0 28px 0 8px; appearance: none; border: 0; outline: 0; background: none; color: inherit; font: 400 11px Inter, sans-serif; cursor: pointer; }
.time select { font-size: 14px; color: #f7f5fa; } svg { position: absolute; right: 8px; pointer-events: none; }
</style>
