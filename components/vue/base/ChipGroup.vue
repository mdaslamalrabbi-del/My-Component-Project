<script setup lang="ts">
import Chip from "./Chip.vue";
defineProps<{ prefix?: string; items: string[]; suffix?: string }>();
</script>

<template>
  <div class="group">
    <span v-if="prefix" class="tx">{{ prefix }}</span>
    <template v-for="(item, i) in items" :key="i">
      <Chip :label="item" :left-icon="false" :right-icon="false" outlined />
      <span v-if="i < items.length - 1" class="tx">,</span>
    </template>
    <span v-if="suffix" class="tx">{{ suffix }}</span>
  </div>
</template>

<style scoped>
.group { display: flex; flex-wrap: wrap; align-items: center; gap: 2px; color: #fff; font: 400 13px/18px Inter, sans-serif; }
.tx { padding: 0 2px; }
</style>
