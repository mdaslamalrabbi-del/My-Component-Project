<script setup lang="ts">
import FileTree from "./FileTree.vue";
const nodes = [
  { name: ".claude-plugin", children: [{ name: "marketplace.json" }, { name: "plugin.json" }] },
  { name: "agents", children: [] }, { name: "skills", children: [] },
];
</script>

<template>
  <div class="wrap">
    <FileTree :nodes="nodes" :default-open="['.claude-plugin']" />
    <div v-for="f in ['LICENSE', 'README.md']" :key="f" class="file">{{ f }}</div>
  </div>
</template>

<style scoped>
.wrap { width: 240px; display: flex; flex-direction: column; gap: 2px; }
.file { height: 32px; padding: 8px; box-sizing: border-box; display: flex; align-items: center; color: #fff; font: 500 14px Inter, sans-serif; }
</style>
