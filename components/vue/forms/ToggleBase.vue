<script setup lang="ts">
import { computed } from "vue";
const model = defineModel<boolean>({ default: false });
const props = withDefaults(defineProps<{ disabled?: boolean; label?: string; size?: "sm" | "md" | "lg" }>(), { size: "md" });
const SIZES = { sm: [24, 16, 12], md: [32, 20, 16], lg: [40, 24, 20] } as const;
const dims = computed(() => SIZES[props.size]);
</script>

<template>
  <button type="button" role="switch" :aria-checked="model" :aria-label="label" :disabled="disabled" class="tg"
    :style="{ width: dims[0] + 'px', height: dims[1] + 'px', borderRadius: dims[1] / 2 + 'px', background: model ? '#2D68FE' : '#E6E8EA' }"
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
