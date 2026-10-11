<script setup lang="ts">
defineProps<{ mode?: "default" | "responsive" | "code"; tab: "home" | "code"; user: { name: string; avatar: string } }>();
defineEmits<{ "update:tab": [t: "home" | "code"] }>();
</script>

<template>
  <aside :class="['sb', { rail: mode === 'responsive' }]">
    <div class="top"><ModeSwitch :model-value="tab" :compact="mode === 'responsive'" @update:model-value="$emit('update:tab', $event)" /></div>
    <nav class="body"><slot /></nav>
    <footer class="foot">
      <img :src="user.avatar" alt="" /><span v-if="mode !== 'responsive'">{{ user.name }}</span>
    </footer>
  </aside>
</template>

<style scoped>
.sb { display: flex; flex-direction: column; width: 264px; height: 100%; background: #181715; border: 1px solid #27272a; color: #a1a1aa; font: 14px Inter, system-ui, sans-serif; }
.sb.rail { width: 56px; align-items: center; }
.top { padding: 12px; } .body { flex: 1; overflow-y: auto; padding: 0 12px; }
.foot { display: flex; align-items: center; gap: 8px; padding: 12px; border-top: 1px solid #27272a; color: #d2cfd9; }
.foot img { width: 20px; height: 20px; border-radius: 3px; }
</style>
