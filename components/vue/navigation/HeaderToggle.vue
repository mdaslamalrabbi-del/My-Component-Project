<script setup lang="ts">
defineProps<{ label: string }>();
const pressed = defineModel<boolean>({ default: false });
</script>

<template>
  <button type="button" class="ht" :class="{ on: pressed }" :aria-pressed="pressed" :aria-label="label" @click="pressed = !pressed">
    <slot />
  </button>
</template>

<style scoped>
.ht { display: grid; place-items: center; width: 26px; height: 26px; border: 0; border-radius: 6px; background: none; color: #A1A1AA; cursor: pointer; }
.ht:hover { background: #181715; }
.ht.on { background: #171329; color: #9C86FF; }
.ht :slotted(svg) { width: 16px; height: 16px; }
</style>
