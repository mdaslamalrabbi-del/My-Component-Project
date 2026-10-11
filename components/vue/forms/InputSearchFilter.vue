<script setup lang="ts">
withDefaults(defineProps<{ placeholder?: string }>(), { placeholder: "Search Projects" });
const model = defineModel<string>({ default: "" });
defineEmits<{ filter: [] }>();
</script>

<template>
  <div class="sf">
    <svg viewBox="0 0 24 24" class="ic" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
    <input v-model="model" :placeholder="placeholder" :aria-label="placeholder" />
    <button type="button" aria-label="Filter" @click="$emit('filter')">
      <svg viewBox="0 0 24 24" class="ic" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <path d="M4 7h10M18 7h2M4 17h2M10 17h10" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.sf { display: flex; align-items: center; gap: 12px; width: 330px; color: #4a4850; }
.ic { width: 18px; height: 18px; flex: none; }
input { flex: 1; min-width: 0; background: none; border: 0; outline: 0; color: #d2cfd9; font: 500 16px Inter, sans-serif; }
input::placeholder { color: #4a4850; }
button { background: none; border: 0; padding: 0; color: #6c6a64; cursor: pointer; } button:hover { color: #d2cfd9; }
</style>
