<script setup lang="ts">
const model = defineModel<string>({ default: "" });
withDefaults(defineProps<{ variant?: "default" | "footer"; title?: string; description?: string; placeholder?: string }>(), {
  variant: "default", title: "Instructions for Claude", placeholder: "e.g. ask clarifying questions before giving detailed answers",
});
</script>

<template>
  <div v-if="variant === 'footer'" class="card">
    <textarea v-model="model" :placeholder="placeholder" class="area black" />
    <div class="footer"><slot name="footer" /></div>
  </div>
  <div v-else class="col">
    <div class="head">
      <div class="txt"><h3>{{ title }}</h3><p>{{ description }}</p></div>
      <slot name="action" />
    </div>
    <textarea v-model="model" :placeholder="placeholder" class="area" />
    <hr />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 771px; }
.head { display: flex; gap: 24px; align-items: flex-start; }
.txt { flex: 1; display: flex; flex-direction: column; gap: 16px; }
h3 { margin: 0; color: #fff; font: 500 14px Inter, sans-serif; }
p { margin: 0; color: #A1A1AA; font: 400 13px/17px Inter, sans-serif; }
.area { display: block; width: 100%; box-sizing: border-box; height: 93px; resize: none; padding: 12px; border: 0; border-radius: 8px; background: #27272A; color: #fff; font: 400 14px Inter, sans-serif; outline: 0; }
.area.black { background: #000; }
.area::placeholder { color: #6C6A64; }
.card { max-width: 771px; border-radius: 8px; background: #27272A; overflow: hidden; }
.footer { display: flex; align-items: center; justify-content: space-between; height: 40px; padding: 0 16px; color: #A1A1AA; font-size: 12px; }
hr { margin: 0; border: 0; height: 1px; background: #27272A; }
</style>
