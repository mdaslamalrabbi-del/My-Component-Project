<script setup lang="ts">
const props = withDefaults(defineProps<{ variant?: "file" | "empty"; accept?: string }>(), { variant: "file" });
const emit = defineEmits<{ files: [File[]]; click: [] }>();
const input = ref<HTMLInputElement>();
const over = ref(false);
function drop(e: DragEvent) { over.value = false; emit("files", [...(e.dataTransfer?.files ?? [])]); }
function activate() { props.variant === "file" ? input.value?.click() : emit("click"); }
</script>

<template>
  <div :class="['zone', { over }]" role="button" tabindex="0" @click="activate" @keydown.enter="activate"
    @dragover.prevent="over = true" @dragleave="over = false" @drop.prevent="variant === 'file' && drop($event)">
    <span class="tile"><slot name="icon" /></span>
    <slot />
    <input v-if="variant === 'file'" ref="input" type="file" multiple :accept="accept" hidden
      @change="emit('files', [...((($event.target as HTMLInputElement).files) ?? [])])" />
  </div>
</template>

<style scoped>
.zone { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; width: 262px; height: 140px; padding: 0 24px; box-sizing: border-box;
  text-align: center; background: #181715; border: 1px solid #27272a; border-radius: 12px; color: #a1a1aa; font: 400 13px/18px Inter, sans-serif; cursor: pointer; }
.zone.over { border-color: #9c86ff; }
.tile { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 6px; background: #121113; color: #4a4850; }
</style>
