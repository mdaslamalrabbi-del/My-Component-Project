<script setup lang="ts">
defineProps<{ value: string; name?: string; title: string; price: string; note?: string; badge?: string }>();
const model = defineModel<string>();
</script>

<template>
  <label class="card">
    <input type="radio" :name="name" :value="value" v-model="model" />
    <div class="top"><i class="ring"><b /></i><span v-if="badge" class="badge">{{ badge }}</span></div>
    <div class="body"><span class="t">{{ title }}</span><div class="p"><span>{{ price }}</span><small v-if="note">{{ note }}</small></div></div>
  </label>
</template>

<style scoped>
.card { display: flex; flex-direction: column; gap: 16px; width: 257px; box-sizing: border-box; padding: 16px; border: 1px solid #333137; border-radius: 12px; background: #181715; cursor: pointer; font-family: Inter, sans-serif; }
.card:has(input:checked) { background: #000; border-color: #9c86ff; } .card:has(input:focus-visible) { outline: 2px solid #9c86ff; }
input { position: absolute; opacity: 0; }
.top { display: flex; align-items: center; justify-content: space-between; }
.ring { display: grid; place-items: center; width: 22px; height: 22px; box-sizing: border-box; border: 1px solid #d2cfd9; border-radius: 50%; }
.ring b { display: none; width: 13px; height: 13px; border-radius: 50%; background: #0075ff; }
input:checked ~ .top .ring { background: #fff; border-color: #0075ff; } input:checked ~ .top .ring b { display: block; }
.badge { display: inline-flex; align-items: center; height: 22px; padding: 0 8px; border-radius: 6px; background: #1b4721; color: #3fb950; font: 500 12px Inter, sans-serif; }
.body { display: flex; flex-direction: column; gap: 20px; } .t { color: #fff; font: 500 12px Inter, sans-serif; }
.p { display: flex; flex-direction: column; gap: 12px; } .p span { color: #fff; font-size: 14px; } .p small { color: #6c6a64; font-size: 11px; }
</style>
