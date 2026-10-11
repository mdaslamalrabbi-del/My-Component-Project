<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: "default" | "icon" | "branch"; label?: string; toggleLabel?: string;
}>(), { type: "default", label: "samiis-portfolio", toggleLabel: "worktree" });
const checked = defineModel<boolean>("checked", { default: false });
</script>

<template>
  <span class="chip">
    <slot name="icon">
      <svg viewBox="0 0 24 24" class="ic" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <template v-if="type === 'branch'">
          <path d="M6 3v12" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" />
        </template>
        <path v-else d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    </slot>
    <span v-if="type !== 'icon'">{{ label }}</span>
    <template v-if="type === 'branch'">
      <span class="div" />
      <label class="tog">
        <input type="checkbox" v-model="checked" />
        <i class="box" />{{ toggleLabel }}
      </label>
    </template>
  </span>
</template>

<style scoped>
.chip { display: inline-flex; align-items: center; gap: 6px; height: 24px; padding: 0 6px; border-radius: 4px; background: #27272a; color: #d2cfd9; font: 400 13px/18px Inter, sans-serif; }
.ic { width: 12px; height: 12px; color: #a1a1aa; flex: none; }
.div { width: 1px; height: 12px; background: #333137; }
.tog { display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }
.tog input { position: absolute; opacity: 0; }
.box { width: 12px; height: 12px; border: 1px solid #a1a1aa; border-radius: 2px; }
.tog input:checked + .box { background: #9c86ff; border-color: #9c86ff; }
.tog input:focus-visible + .box { outline: 2px solid #9c86ff; outline-offset: 1px; }
</style>
