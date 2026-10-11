<script setup lang="ts">
import ModeSwitchItem from "./ModeSwitchItem.vue";
defineProps<{ items: string[]; large?: boolean }>();
const model = defineModel<string>({ required: true });
</script>

<template>
  <div role="tablist" class="ms" :class="{ large }">
    <ModeSwitchItem v-for="i in items" :key="i" :label="i" :large="large" :active="i === model" @click="model = i" />
  </div>
</template>

<style scoped>
.ms { display: inline-flex; gap: 2px; padding: 2px; border-radius: 6px; background: #121113; }
.ms.large { gap: 4px; padding: 4px; }
</style>
