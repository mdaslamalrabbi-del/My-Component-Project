<script setup lang="ts">
type Option = { value: string; label: string };
const props = withDefaults(defineProps<{ options: Option[]; placeholder?: string; size?: "lg" | "sm"; searchable?: boolean }>(),
  { placeholder: "Select your role", size: "lg" });
const model = defineModel<string>();
const open = ref(false), q = ref("");
const root = ref<HTMLElement>();
const current = computed(() => props.options.find((o) => o.value === model.value));
const shown = computed(() => props.options.filter((o) => o.label.toLowerCase().includes(q.value.toLowerCase())));
const close = (e: MouseEvent) => { if (!root.value?.contains(e.target as Node)) open.value = false; };
onMounted(() => document.addEventListener("mousedown", close));
onBeforeUnmount(() => document.removeEventListener("mousedown", close));
function pick(v: string) { model.value = v; open.value = false; q.value = ""; }
</script>

<template>
  <div ref="root" class="sel" @keydown.esc="open = false">
    <button type="button" role="combobox" :aria-expanded="open" aria-haspopup="listbox" :class="['trg', size, { open, has: current }]" @click="open = !open">
      <span><slot name="leading" />{{ current?.label ?? placeholder }}</span>
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6" /></svg>
    </button>
    <div v-if="open" class="pn">
      <input v-if="searchable" v-model="q" placeholder="Search" class="s" />
      <ul role="listbox">
        <li v-for="o in shown" :key="o.value" role="option" :aria-selected="o.value === model" :class="{ on: o.value === model }" @click="pick(o.value)">
          {{ o.label }}<span v-if="o.value === model">✓</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sel { position: relative; width: 348px; max-width: 100%; font-family: Inter, sans-serif; }
.trg { display: flex; align-items: center; justify-content: space-between; width: 100%; height: 40px; padding: 0 12px; border: 1px solid #27272a; border-radius: 8px; background: #181715; color: #a1a1aa; font-size: 14px; cursor: pointer; }
.trg.sm { height: 32px; padding: 0 8px; } .trg:hover { background: #202022; } .trg.has { color: #fff; }
.trg.open, .trg:focus-visible { background: #121113; border-color: #9c86ff; outline: 0; }
.trg span { display: flex; align-items: center; gap: 10px; }
.pn { position: absolute; z-index: 10; top: calc(100% + 4px); width: 100%; box-sizing: border-box; padding: 6px; background: #202022; border: 1px solid #333137; border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,.4); }
.s { width: 100%; box-sizing: border-box; height: 32px; margin-bottom: 6px; padding: 0 8px; border: 0; border-radius: 8px; background: #27272a; color: #fff; outline: 0; }
ul { list-style: none; margin: 0; padding: 0; max-height: 288px; overflow: auto; }
li { display: flex; align-items: center; justify-content: space-between; height: 27px; padding: 0 12px; border-radius: 4px; color: #d2cfd9; font-size: 14px; cursor: pointer; }
li:hover, li.on { background: #27272a; color: #fff; }
</style>
