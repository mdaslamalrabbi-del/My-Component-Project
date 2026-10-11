<script setup lang="ts">
defineProps<{ label?: string; helper?: string; placeholder?: string; error?: boolean; disabled?: boolean }>();
const model = defineModel<string>({ default: "" });
const uid = `tf-${Math.random().toString(36).slice(2, 8)}`;
</script>

<template>
  <div class="tf">
    <label v-if="label" :for="uid" :class="{ off: disabled }">{{ label }}</label>
    <div :class="['box', { error, disabled }]">
      <span v-if="$slots.leading" class="ic"><slot name="leading" /></span>
      <input :id="uid" v-model="model" :placeholder="placeholder" :disabled="disabled" :aria-invalid="error" />
      <span v-if="$slots.trailing" class="ic"><slot name="trailing" /></span>
    </div>
    <p v-if="helper" :class="{ error, off: disabled }">{{ helper }}</p>
  </div>
</template>

<style scoped>
.tf { display: flex; flex-direction: column; gap: 8px; width: 360px; max-width: 100%; font-family: Inter, sans-serif; }
label { color: #fff; font: 500 13px Inter, sans-serif; } label.off { color: #6c6a64; }
.box { display: flex; align-items: center; gap: 8px; height: 40px; padding: 0 12px; border: 1px solid #333137; border-radius: 6px; background: #27272a; }
.box:focus-within { border-color: #9c86ff; } .box.error { border-color: #f85149; } .box.disabled { background: #202022; border-color: #27272a; }
.ic { width: 16px; height: 16px; color: #a1a1aa; flex: none; }
input { flex: 1; min-width: 0; border: 0; outline: 0; background: none; color: #fff; caret-color: #9c86ff; font: 400 14px Inter, sans-serif; }
input::placeholder { color: #a1a1aa; } input:disabled, input:disabled::placeholder { color: #6c6a64; }
p { margin: 0; color: #a1a1aa; font-size: 12px; } p.error { color: #f85149; } p.off { color: #6c6a64; }
</style>
