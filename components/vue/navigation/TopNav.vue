<script setup lang="ts">
defineProps<{ title: string; tabs: string[]; tab: string; filters: string[]; filter: string; query: string; backBottom?: boolean }>();
defineEmits<{ "update:tab": [v: string]; "update:filter": [v: string]; "update:query": [v: string]; back: []; add: [] }>();
</script>

<template>
  <header class="tn">
    <button v-if="!backBottom" class="back" @click="$emit('back')">← Go Back</button>
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="trk" role="tablist"><button v-for="t in tabs" :key="t" role="tab" :aria-selected="t === tab" :class="{ on: t === tab }" @click="$emit('update:tab', t)">{{ t }}</button></div>
      <span class="div" />
      <div class="trk" role="tablist"><button v-for="f in filters" :key="f" role="tab" :aria-selected="f === filter" :class="{ on: f === filter }" @click="$emit('update:filter', f)">{{ f }}</button></div>
      <input class="q" :value="query" placeholder="Search skills and plugins" @input="$emit('update:query', ($event.target as HTMLInputElement).value)" />
      <button class="add" @click="$emit('add')">Add +</button>
    </div>
    <button v-if="backBottom" class="back" @click="$emit('back')">← Go Back</button>
  </header>
</template>

<style scoped>
.tn { display: flex; flex-direction: column; gap: 12px; font-family: Inter, system-ui, sans-serif; }
h1 { margin: 0; font-size: 20px; font-weight: 600; color: #fff; }
.row { display: flex; align-items: center; gap: 12px; }
.back { all: unset; cursor: pointer; align-self: flex-start; height: 32px; padding: 0 12px; border-radius: 8px; background: #27272a; color: #fff; font-size: 12px; }
.trk { display: flex; padding: 4px; border-radius: 8px; background: #121113; }
.trk button { all: unset; cursor: pointer; height: 24px; padding: 0 12px; border-radius: 6px; color: #d2cfd9; font-size: 14px; }
.trk button.on { background: #27272a; color: #fff; }
.div { width: 1px; height: 32px; background: #27272a; }
.q { flex: 1; height: 32px; border: 0; border-radius: 8px; background: #121113; padding: 0 12px; color: #fff; }
.add { all: unset; cursor: pointer; height: 32px; padding: 0 12px; border-radius: 8px; background: #fff; color: #121113; font-size: 14px; font-weight: 500; }
</style>
