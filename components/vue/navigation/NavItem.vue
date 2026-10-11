<script setup lang="ts">
withDefaults(defineProps<{ label: string; state?: "default" | "active" | "active2" | "light" | "indented" }>(), { state: "default" });
defineEmits<{ click: [] }>();
</script>

<template>
  <button type="button" class="nav" :class="state" @click="$emit('click')">
    <span v-if="state !== 'indented' && $slots.icon" class="ic"><slot name="icon" /></span>
    <span class="lb">{{ label }}</span>
    <slot name="trailing" />
  </button>
</template>

<style scoped>
.nav { display: flex; align-items: center; gap: 10px; width: 100%; height: 32px; padding: 8px; border: 0; border-radius: 6px; background: none; color: #A1A1AA; font: 400 14px Inter, sans-serif; text-align: left; cursor: pointer; }
.nav:hover { background: #181715; }
.nav.active { background: #181715; color: #D2CFD9; }
.nav.active2 { background: #27272A; color: #fff; }
.nav.light { background: #fff; color: #333137; }
.nav.indented { padding-left: 34px; }
.ic { width: 16px; height: 16px; display: grid; place-items: center; }
.lb { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
</style>
