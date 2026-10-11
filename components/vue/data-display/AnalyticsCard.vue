<script setup lang="ts">
withDefaults(defineProps<{
  bars: { h: number; on: boolean }[]; yLabels: string[]; xLabels: string[];
  models: { name: string; usage: string; share: string }[];
  activeTab?: string; activeRange?: string;
}>(), { activeTab: "Overview", activeRange: "All" });
</script>

<template>
  <div class="card">
    <div class="row">
      <span v-for="t in ['Overview', 'Models']" :key="t" :class="['pill', { on: t === activeTab }]">{{ t }}</span>
      <span class="grow" />
      <span v-for="r in ['All', '30d', '7d']" :key="r" :class="['pill', { on: r === activeRange }]">{{ r }}</span>
    </div>
    <div class="chart">
      <div class="y"><span v-for="l in yLabels" :key="l">{{ l }}</span></div>
      <div class="bars"><i v-for="(b, i) in bars" :key="i" :class="{ on: b.on }" :style="{ height: b.h + 'px' }" /></div>
    </div>
    <div class="x"><span v-for="l in xLabels" :key="l">{{ l }}</span></div>
    <ul>
      <li v-for="m in models" :key="m.name">
        <span><s />{{ m.name }}</span><span><em>{{ m.usage }}</em><b>{{ m.share }}</b></span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card { display: flex; flex-direction: column; gap: 20px; padding: 16px; border-radius: 12px; background: #181715; color: #fff; font: 500 13px/18px Inter, sans-serif; }
.row { display: flex; align-items: center; gap: 2px; } .grow { flex: 1; }
.pill { height: 20px; padding: 0 6px; border-radius: 4px; display: inline-flex; align-items: center; color: #a1a1aa; }
.pill.on { background: #272729; color: #fff; }
.chart { display: flex; gap: 16px; height: 161px; }
.y { width: 45px; display: flex; flex-direction: column; justify-content: space-between; align-items: flex-end; font-size: 12px; color: #a1a1aa; }
.bars { flex: 1; display: flex; align-items: flex-end; gap: 6px; padding-right: 12px; }
.bars i { flex: 1; border-radius: 2px 2px 0 0; background: #272729; } .bars i.on { background: #7f64f7; }
.x { display: flex; justify-content: space-between; padding: 0 12px 0 76px; font-size: 12px; color: #a1a1aa; }
ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; }
li { display: flex; justify-content: space-between; } li span { display: flex; align-items: center; gap: 8px; }
li em { font: 400 12px/16px Inter; color: #a1a1aa; margin-right: 32px; } li b { width: 60px; text-align: right; font-size: 12px; }
li s { width: 10px; height: 10px; border-radius: 2px; background: #9c86ff; }
</style>
