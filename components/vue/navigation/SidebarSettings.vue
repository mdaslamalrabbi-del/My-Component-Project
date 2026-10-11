<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps<{ sections: { title: string; items: { id: string; label: string }[] }[]; active: string }>();
defineEmits<{ select: [id: string] }>();
const q = ref("");
const shown = computed(() => props.sections.map((s) => ({ ...s, items: s.items.filter((i) => i.label.toLowerCase().includes(q.value.toLowerCase())) })));
</script>

<template>
  <aside class="ss">
    <input v-model="q" placeholder="Search" aria-label="Search settings" />
    <section v-for="sec in shown" :key="sec.title">
      <h3>{{ sec.title }}</h3>
      <button v-for="i in sec.items" :key="i.id" type="button" :class="{ on: i.id === active }" @click="$emit('select', i.id)">{{ i.label }}</button>
    </section>
  </aside>
</template>

<style scoped>
.ss { width: 192px; padding: 12px; box-sizing: border-box; display: flex; flex-direction: column; gap: 24px; background: #181715; border: 1px solid #27272a; font: 14px Inter, system-ui, sans-serif; }
input { height: 32px; border: 0; border-radius: 8px; background: #27272a; padding: 0 8px; color: #fff; }
h3 { margin: 0 0 12px; padding: 12px 8px 0; font-size: 12px; font-weight: 400; text-transform: uppercase; color: #a1a1aa; }
button { all: unset; display: block; box-sizing: border-box; width: 100%; height: 32px; line-height: 32px; padding: 0 8px; border-radius: 8px; color: #a1a1aa; cursor: pointer; }
button.on { background: #27272a; color: #fff; }
</style>
