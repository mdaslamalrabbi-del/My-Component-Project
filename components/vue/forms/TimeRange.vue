<script setup lang="ts">
defineProps<{ day: string; times: string[]; nextDay?: boolean }>();
const start = defineModel<string>("start", { required: true });
const end = defineModel<string>("end", { required: true });
</script>

<template>
  <div class="row">
    <div class="grp">
      <span class="day">{{ day }}</span>
      <div class="pair">
        <label class="sel big"><select v-model="start" :aria-label="`${day} start`"><option v-for="t in times" :key="t">{{ t }}</option></select></label>
        <span>To</span>
        <label class="sel"><select v-model="end" :aria-label="`${day} end`"><option v-for="t in times" :key="t">{{ t }}</option></select></label>
      </div>
    </div>
    <span v-if="nextDay">next day</span>
  </div>
</template>

<style scoped>
.row { display: flex; align-items: center; gap: 48px; color: #A1A1AA; font: 500 14px Inter, sans-serif; }
.grp { display: flex; align-items: center; gap: 40px; }
.day { width: 92px; }
.pair { display: flex; align-items: center; gap: 8px; }
.sel { display: block; width: 84px; height: 32px; border-radius: 8px; background: #1D1D1F; }
.sel.big { width: 96px; }
.sel:focus-within { box-shadow: 0 0 0 1px #9C86FF; }
select { width: 100%; height: 100%; padding: 0 8px 0 12px; background: none; border: 0; outline: 0; color: #fff; font: 400 12px Inter, sans-serif; }
.big select { font-size: 16px; }
</style>
