<script setup lang="ts">
withDefaults(defineProps<{ type?: "cloud" | "local"; label?: string; placeholder?: string }>(), {
  type: "cloud", label: "Instructions", placeholder: "Describe what Puku should do in each session" });
const model = defineModel<string>({ default: "" });
const worktree = defineModel<boolean>("worktree", { default: false });
</script>

<template>
  <div class="wrap">
    <label>{{ label }}</label>
    <div class="card">
      <div class="top">
        <textarea v-model="model" :placeholder="placeholder" rows="2" />
        <div :class="['bar', type]">
          <template v-if="type === 'cloud'"><button>Voice ⌄</button><button>Opus 4.8 ⌄</button></template>
          <template v-else><button>Manual ⌄</button><button>Default ⌄</button></template>
        </div>
      </div>
      <div class="foot">
        <template v-if="type === 'cloud'"><span>Select a repository</span><span class="env">puku-cli</span></template>
        <template v-else>
          <span>Select folder</span>
          <label class="wt"><input type="checkbox" v-model="worktree" /> Worktree</label>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap { display: flex; flex-direction: column; gap: 8px; font-family: Inter, sans-serif; }
.wrap > label { color: #fff; font: 500 13px Inter, sans-serif; }
.card { border-radius: 8px; overflow: hidden; background: #181715; }
.top { display: flex; flex-direction: column; justify-content: space-between; gap: 16px; min-height: 96px; padding: 14px; box-sizing: border-box; }
textarea { background: none; border: 0; outline: 0; resize: none; color: #fff; font: 400 14px Inter, sans-serif; }
textarea::placeholder { color: #4a4850; }
.bar { display: flex; align-items: center; gap: 16px; } .bar.cloud { justify-content: flex-end; } .bar.local { justify-content: space-between; }
.bar button { background: none; border: 0; color: #a1a1aa; font-size: 12px; cursor: pointer; }
.foot { display: flex; align-items: center; justify-content: space-between; height: 36px; padding: 0 14px; background: #202022; color: #a1a1aa; font-size: 13px; }
.env { color: #d2cfd9; } .wt { display: inline-flex; align-items: center; gap: 6px; }
</style>
