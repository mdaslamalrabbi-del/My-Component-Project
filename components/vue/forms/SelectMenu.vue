<script setup lang="ts">
defineProps<{ items: { value: string; label: string }[] }>();
const model = defineModel<string>();
</script>

<template>
  <div role="listbox" class="menu">
    <SelectOption v-for="it in items" :key="it.value" :selected="it.value === model" @click="model = it.value">{{ it.label }}</SelectOption>
  </div>
</template>

<style scoped>
.menu { display: flex; flex-direction: column; width: 360px; max-width: 100%; padding: 4px; box-sizing: border-box; background: #202022; border: 1px solid #333137; border-radius: 6px; }
</style>
