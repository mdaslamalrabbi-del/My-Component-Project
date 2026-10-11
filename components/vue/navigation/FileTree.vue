<script setup lang="ts">
import { ref } from "vue";
import NavItem from "./NavItem.vue";
type Node = { name: string; children?: Node[] };
const props = defineProps<{ nodes: Node[]; defaultOpen?: string[] }>();
const open = ref(new Set(props.defaultOpen ?? []));
const toggle = (n: string) => { open.value.has(n) ? open.value.delete(n) : open.value.add(n); open.value = new Set(open.value); };
function flat(nodes: Node[], depth = 0): { name: string; dir: boolean; depth: number }[] {
  return nodes.flatMap((n) => [{ name: n.name, dir: !!n.children, depth }, ...(n.children && open.value.has(n.name) ? flat(n.children, depth + 1) : [])]);
}
</script>

<template>
  <nav class="tree" aria-label="Files">
    <NavItem v-for="r in flat(nodes)" :key="r.name" :label="r.name" :state="!r.dir && r.depth ? 'indented' : 'default'" @click="r.dir && toggle(r.name)" />
  </nav>
</template>

<style scoped>.tree { width: 240px; display: flex; flex-direction: column; }</style>
