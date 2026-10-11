<script setup lang="ts">
withDefaults(defineProps<{ type?: "task" | "breadcrumb" | "breadcrumbActions"; title?: string; parent?: string; current?: string }>(), { type: "task", title: "New task", parent: "Projects" });
defineEmits<{ toggleSidebar: [] }>();
</script>

<template>
  <header class="hb">
    <button v-if="type === 'task'" class="title" type="button">{{ title }} <span>⌄</span></button>
    <nav v-else aria-label="Breadcrumb" class="crumb">{{ parent }} <i>/</i> <b>{{ current }}</b></nav>
    <div v-if="type === 'breadcrumbActions'" class="actions"><slot name="actions" /></div>
    <button v-else class="ic" type="button" aria-label="Toggle sidebar" @click="$emit('toggleSidebar')"><slot name="sidebar-icon">▯</slot></button>
  </header>
</template>

<style scoped>
.hb { display: flex; align-items: center; justify-content: space-between; height: 56px; padding: 0 24px; border-bottom: 1px solid #27272A; }
.title { background: none; border: 0; color: #fff; font: 500 16px Inter, sans-serif; cursor: pointer; }
.title span { color: #A1A1AA; }
.crumb { color: #A1A1AA; font: 400 14px Inter, sans-serif; }
.crumb i { font-style: normal; margin: 0 4px; }
.crumb b { color: #fff; font: 500 16px Inter, sans-serif; }
.ic { background: none; border: 0; color: #A1A1AA; cursor: pointer; font-size: 20px; }
.actions { display: flex; gap: 12px; color: #A1A1AA; }
</style>
