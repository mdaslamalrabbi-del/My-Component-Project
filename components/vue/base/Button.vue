<script setup lang="ts">
import { computed, useSlots } from "vue";

// 24, 32 and 40 come from the Figma component. 36 and 48 are proposed, not in Figma.
const SIZES = {
  24: { h: 24, font: 12, radius: 6, gap: 4, pad: { text: 12, one: 10, both: 4, only: 4 } },
  32: { h: 32, font: 14, radius: 8, gap: 6, pad: { text: 12, one: 8, both: 8, only: 8 } },
  36: { h: 36, font: 14, radius: 8, gap: 8, pad: { text: 14, one: 12, both: 8, only: 9 } },
  40: { h: 40, font: 14, radius: 8, gap: 8, pad: { text: 16, one: 14, both: 8, only: 10 } },
  48: { h: 48, font: 16, radius: 8, gap: 8, pad: { text: 20, one: 16, both: 10, only: 12 } },
} as const;

const props = withDefaults(defineProps<{ size?: keyof typeof SIZES; iconOnly?: boolean; disabled?: boolean }>(), { size: 40 });
const slots = useSlots();
const kind = computed(() => props.iconOnly ? "only" : slots.left && slots.right ? "both" : slots.left || slots.right ? "one" : "text");
const style = computed(() => {
  const s = SIZES[props.size];
  return {
    height: s.h + "px", width: kind.value === "only" ? s.h + "px" : undefined,
    padding: `0 ${s.pad[kind.value]}px`, gap: s.gap + "px", fontSize: s.font + "px",
    borderRadius: (kind.value === "only" ? 8 : s.radius) + "px",
  };
});
</script>

<template>
  <button :class="['btn', { only: iconOnly, s24: size === 24 }]" :style="style" :disabled="disabled">
    <slot name="left" /><slot /><slot name="right" />
  </button>
</template>

<style scoped>
.btn { display: inline-flex; align-items: center; justify-content: center; border: 0; font-weight: 500; color: #d2cfd9; background: #181715; cursor: pointer; }
.btn.s24 { background: #27272a; } .btn.only { box-shadow: inset 0 0 0 1px #27272a; }
.btn:hover:not(:disabled) { background: #27272a; box-shadow: inset 0 0 0 1px #333137; }
.btn:active:not(:disabled) { color: #fff; }
.btn:disabled { background: #181715; color: #6c6a64; box-shadow: none; cursor: not-allowed; }
</style>
