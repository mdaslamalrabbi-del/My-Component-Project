<script setup lang="ts">
import { computed } from "vue";
const model = defineModel<string>({ default: "" });
const props = defineProps<{ processing?: string; placeholder?: string }>();
const emit = defineEmits<{ send: [text: string] }>();
const has = computed(() => model.value.trim().length > 0);
const send = () => { if (has.value) emit("send", model.value); };
</script>

<template>
  <div class="wrap">
    <p v-if="processing" class="status" role="status">{{ processing }}</p>
    <div class="box">
      <textarea v-model="model" rows="1" :placeholder="placeholder ?? 'Write a message…'"
        @keydown.enter.exact.prevent="send" />
      <button type="button" aria-label="Send" :disabled="!has" :class="{ on: has }" @click="send">↑</button>
    </div>
  </div>
</template>

<style scoped>
.wrap { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 794px; }
.status { margin: 0; color: #A1A1AA; font: 400 13px Inter, sans-serif; }
.box { display: flex; align-items: center; gap: 24px; padding: 16px; background: #181715; border: 1px solid #27272A; border-radius: 16px; }
textarea { flex: 1; resize: none; background: none; border: 0; outline: 0; color: #fff; font: 400 14px Inter, sans-serif; }
textarea::placeholder { color: #A1A1AA; }
button { width: 32px; height: 32px; border: 0; border-radius: 8px; background: #27272A; color: #6C6A64; cursor: pointer; }
button.on { background: #9C86FF; color: #fff; }
</style>
