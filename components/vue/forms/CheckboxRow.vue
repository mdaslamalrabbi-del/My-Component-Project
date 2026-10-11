<script setup lang="ts">
withDefaults(defineProps<{ type?: "checkbox" | "icon" }>(), { type: "checkbox" });
const checked = defineModel<boolean>("checked", { default: false });
</script>

<template>
  <div class="row">
    <label v-if="type === 'checkbox'" class="cb">
      <input type="checkbox" v-model="checked" /><i />
    </label>
    <span v-else class="ic"><slot name="icon" /></span>
    <p><slot /></p>
  </div>
</template>

<style scoped>
.row { display: flex; align-items: flex-start; gap: 12px; font: 400 13px/20px Inter, sans-serif; color: #a1a1aa; }
p { margin: 0; } p :deep(a) { color: #beb0ff; text-decoration: underline; }
.cb { margin-top: 2px; position: relative; width: 16px; height: 16px; cursor: pointer; }
.cb input { position: absolute; opacity: 0; }
.cb i { display: block; width: 16px; height: 16px; border: 1px solid #6c6a64; border-radius: 3px; }
.cb input:checked + i { background: #9c86ff; border-color: #9c86ff; }
.cb input:focus-visible + i { outline: 2px solid #9c86ff; outline-offset: 2px; }
.ic { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 50%; background: #27272a; color: #d2cfd9; flex: none; }
</style>
