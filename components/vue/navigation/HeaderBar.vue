<script setup lang="ts">
defineProps<{ title: string; folder?: string }>();
defineEmits<{ title: [] }>();
</script>

<template>
  <header class="bar">
    <button class="t" type="button" @click="$emit('title')"><slot name="icon" />{{ title }}<span class="c">⌄</span></button>
    <span v-if="folder" class="badge">{{ folder }}</span>
    <span class="sp" />
    <div class="actions"><slot name="actions" /></div>
  </header>
</template>

<style scoped>
.bar { display: flex; align-items: center; gap: 8px; height: 50px; padding: 0 16px 0 30px; background: #121113; }
.t { display: flex; align-items: center; gap: 8px; background: none; border: 0; color: #fff; font: 400 14px Inter, sans-serif; cursor: pointer; }
.c { color: #A1A1AA; }
.badge { padding: 4px 6px; border-radius: 4px; background: #27272A; color: #A1A1AA; font: 400 11px Inter, sans-serif; }
.sp { flex: 1; }
.actions { display: flex; gap: 16px; color: #A1A1AA; }
</style>
