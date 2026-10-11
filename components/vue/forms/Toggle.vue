<script setup lang="ts">
const model = defineModel<boolean>({ default: false });
defineProps<{ disabled?: boolean; label?: string }>();
const dims = [28,16,12] as const;
</script>

<template>
  <button type="button" role="switch" :aria-checked="model" :aria-label="label" :disabled="disabled" class="tg"
    :style="{ width: dims[0] + 'px', height: dims[1] + 'px', borderRadius: dims[1] / 2 + 'px', background: model ? '#9C86FF' : '#333137' }"
    @click="model = !model">
    <span class="k" :style="{ width: dims[2] + 'px', height: dims[2] + 'px', top: (dims[1] - dims[2]) / 2 + 'px', left: (dims[1] - dims[2]) / 2 + 'px',
      transform: model ? `translateX(${dims[0] - dims[2] - (dims[1] - dims[2])}px)` : 'none', background: '#FFFFFF' }" />
  </button>
</template>

<style scoped>
.tg { position: relative; border: 0; padding: 0; cursor: pointer; transition: background .15s; flex: none; }
.tg:disabled { opacity: .7; cursor: not-allowed; }
.tg:focus-visible { outline: 2px solid #9C86FF; outline-offset: 2px; }
.k { position: absolute; border-radius: 50%; transition: transform .15s; }
</style>
