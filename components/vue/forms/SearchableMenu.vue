<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps<{ items: { value: string; label: string }[] }>();
const model = defineModel<string>();
const q = ref("");
const shown = computed(() => props.items.filter((i) => i.label.toLowerCase().includes(q.value.toLowerCase())));
</script>

<template>
  <div class="menu">
    <input v-model="q" class="search" placeholder="Search" aria-label="Search" />
    <div role="listbox" class="list">
      <div v-for="i in shown" :key="i.value" role="option" :aria-selected="i.value === model" class="row" @click="model = i.value">
        {{ i.label }}<span v-if="i.value === model">✓</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu { width: 180px; background: #202022; border-radius: 8px; padding: 4px; box-shadow: 0 8px 24px #0008; }
.search { width: 100%; box-sizing: border-box; height: 32px; margin-bottom: 4px; padding: 0 8px; background: #27272A; border: 0; border-radius: 6px; color: #fff; font: 400 12px Inter, sans-serif; outline: 0; }
.list { max-height: 216px; overflow-y: auto; }
.row { display: flex; align-items: center; justify-content: space-between; height: 26px; padding: 0 8px; border-radius: 4px; color: #D2CFD9; font: 400 13px Inter, sans-serif; cursor: pointer; }
.row:hover { background: #27272A; }
</style>
