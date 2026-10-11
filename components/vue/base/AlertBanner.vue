<script setup lang="ts">
defineProps<{ message: string; action: string }>();
const checked = defineModel<boolean>({ default: false });
</script>

<template>
  <div class="banner">
    <svg class="ic" viewBox="0 0 16 16" fill="none" stroke="currentColor"><circle cx="8" cy="8" r="6" /><path d="M8 7.5V11M8 5.2v.3" stroke-linecap="round" /></svg>
    <p class="msg">{{ message }}</p>
    <svg class="ic" viewBox="0 0 16 16" fill="none" stroke="currentColor"><circle cx="8" cy="8" r="3.5" /><path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15" stroke-linecap="round" /></svg>
    <span class="act">{{ action }}</span>
    <button role="switch" :aria-checked="checked" :class="['sw', { on: checked }]" @click="checked = !checked" />
  </div>
</template>

<style scoped>
.banner { display: flex; align-items: center; gap: 10px; min-height: 44px; padding: 0 14px; border: 1px solid #272729; border-radius: 8px; color: #d2cfd9; font: 400 14px/20px Inter, sans-serif; }
.ic { width: 16px; height: 16px; flex: none; color: #a1a1aa; }
.msg { flex: 1; margin: 0; padding: 12px 0; } .act { margin-inline-end: 12px; white-space: nowrap; }
.sw { position: relative; width: 28px; height: 16px; border: 0; border-radius: 8px; background: #333137; padding: 0; }
.sw::after { content: ""; position: absolute; top: 2px; left: 2px; width: 12px; height: 12px; border-radius: 50%; background: #fff; transition: transform .15s; }
.sw.on { background: #7f64f7; } .sw.on::after { transform: translateX(12px); }
</style>
