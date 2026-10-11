<script setup lang="ts">
withDefaults(defineProps<{ label?: string; helper?: string; placeholder?: string; size?: "lg" | "sm"; disabled?: boolean }>(), { size: "lg" });
const model = defineModel<string>({ default: "" });
const uid = `in-${Math.random().toString(36).slice(2, 8)}`;
</script>

<template>
  <div class="field">
    <label v-if="label" :for="uid">{{ label }}</label>
    <div :class="['box', size, { disabled }]">
      <span v-if="$slots.icon" class="ic"><slot name="icon" /></span>
      <input :id="uid" v-model="model" :placeholder="placeholder" :disabled="disabled" />
    </div>
    <p v-if="helper">{{ helper }}</p>
  </div>
</template>

<style scoped>
.field { display: flex; flex-direction: column; gap: 8px; width: 280px; font-family: Inter, sans-serif; }
label { color: #fff; font: 500 13px/18px Inter, sans-serif; }
.box { display: flex; align-items: center; gap: 8px; padding: 0 12px; background: #202022; border: 1px solid #27272a; border-radius: 8px; }
.box.lg { height: 40px; font-size: 14px; } .box.sm { height: 32px; border-radius: 6px; font-size: 13px; }
.box:focus-within { border-color: #9c86ff; } .box.disabled { opacity: .6; }
.ic { width: 16px; height: 16px; color: #a1a1aa; flex: none; }
input { flex: 1; min-width: 0; background: none; border: 0; outline: 0; color: #fff; font: inherit; }
input::placeholder { color: #6c6a64; }
p { margin: 0; color: #a1a1aa; font: 400 13px/18px Inter, sans-serif; }
</style>
