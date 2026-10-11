<script setup lang="ts">
defineProps<{ value: string; label?: string; name?: string }>();
const model = defineModel<string>();
</script>

<template>
  <label class="r">
    <input type="radio" :name="name" :value="value" v-model="model" />
    <i class="ring"><b /></i>{{ label }}
  </label>
</template>

<style scoped>
.r { display: inline-flex; align-items: center; gap: 8px; color: #fff; font: 400 14px Inter, sans-serif; cursor: pointer; }
input { position: absolute; opacity: 0; }
.ring { display: grid; place-items: center; width: 22px; height: 22px; box-sizing: border-box; border: 1px solid #d2cfd9; border-radius: 50%; }
.ring b { display: none; width: 13px; height: 13px; border-radius: 50%; background: #0075ff; }
input:checked + .ring { background: #fff; border-color: #0075ff; } input:checked + .ring b { display: block; }
input:focus-visible + .ring { outline: 2px solid #9c86ff; outline-offset: 2px; }
</style>
