<script setup lang="ts">
const model = defineModel<string>({ default: "" });
withDefaults(defineProps<{ label?: string; placeholder?: string; brands?: boolean }>(), { label: "Card number", placeholder: "1234 1234 1234 1234" });
const format = (v: string) => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
</script>

<template>
  <div class="cn">
    <label v-if="label">{{ label }}</label>
    <div class="box">
      <input inputmode="numeric" autocomplete="cc-number" :value="model" :placeholder="placeholder"
        @input="model = format(($event.target as HTMLInputElement).value)" />
      <slot name="flag" />
      <b v-if="brands" class="visa">VISA</b>
    </div>
  </div>
</template>

<style scoped>
.cn { display: flex; flex-direction: column; gap: 8px; width: 348px; max-width: 100%; }
label { color: #fff; font: 500 13px Inter, sans-serif; }
.box { display: flex; align-items: center; gap: 8px; height: 40px; padding: 0 12px; background: #202022; border: 1px solid #27272A; border-radius: 8px; }
.box:focus-within { border-color: #9C86FF; }
input { flex: 1; min-width: 0; background: none; border: 0; outline: 0; color: #fff; font: 400 14px Inter, sans-serif; }
input::placeholder { color: #6C6A64; }
.visa { color: #fff; font-style: italic; font-weight: 900; }
</style>
