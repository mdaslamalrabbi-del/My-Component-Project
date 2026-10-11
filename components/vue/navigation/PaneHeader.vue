<script setup lang="ts">
defineProps<{ type: "plan" | "browser"; title?: string }>();
const url = defineModel<string>("url", { default: "" });
defineEmits<{ close: []; back: []; forward: [] }>();
</script>

<template>
  <div v-if="type === 'plan'" class="plan">
    <span>{{ title ?? "Plan" }}</span>
    <button type="button" aria-label="Close" @click="$emit('close')">✕</button>
  </div>
  <div v-else class="browser">
    <div class="top"><div class="tabs"><slot name="tabs" /></div><button type="button" aria-label="Close" @click="$emit('close')">✕</button></div>
    <div class="nav">
      <button type="button" aria-label="Back" @click="$emit('back')">←</button>
      <button type="button" aria-label="Forward" @click="$emit('forward')">→</button>
      <input v-model="url" placeholder="Type a URL" />
    </div>
  </div>
</template>

<style scoped>
.plan { display: flex; align-items: center; justify-content: space-between; height: 40px; padding: 0 16px; background: #27272A; border: 1px solid #27272A; color: #fff; font: 600 14px Inter, sans-serif; }
.browser { display: flex; flex-direction: column; gap: 8px; padding: 8px 16px; background: #27272A; }
.top { display: flex; justify-content: space-between; align-items: center; padding-left: 66px; }
.tabs { display: flex; gap: 8px; }
.nav { display: flex; align-items: center; gap: 12px; }
button { background: none; border: 0; color: #A1A1AA; cursor: pointer; }
input { flex: 1; height: 32px; padding: 0 12px; border: 0; border-radius: 6px; background: #1D1D1F; color: #fff; font: 400 14px Inter, sans-serif; outline: 0; }
input::placeholder { color: #A1A1AA; }
</style>
