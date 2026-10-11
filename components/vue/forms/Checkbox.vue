<script setup lang="ts">
defineProps<{ disabled?: boolean }>();
const model = defineModel<boolean>({ default: false });
</script>

<template>
  <label class="cb">
    <input type="checkbox" v-model="model" :disabled="disabled" />
    <i class="box" />
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
  </label>
</template>

<style scoped>
.cb { position: relative; display: inline-grid; place-items: center; width: 20px; height: 20px; cursor: pointer; color: #fff; }
input { position: absolute; opacity: 0; }
.box { position: absolute; inset: 0; border: 1px solid #333137; border-radius: 6px; background: #27272a; }
svg { position: relative; opacity: 0; pointer-events: none; }
input:checked ~ .box { background: #9c86ff; border-color: #9c86ff; } input:checked ~ svg { opacity: 1; }
input:focus-visible ~ .box { outline: 2px solid #9c86ff; outline-offset: 2px; } input:disabled ~ .box { opacity: .5; }
</style>
