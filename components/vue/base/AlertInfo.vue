<template>
  <div class="info" role="note">
    <svg class="ic" viewBox="0 0 26 26" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="13" cy="13" r="9.5" /><path d="M13 12v5.5M13 8.8v.4" stroke-linecap="round" /></svg>
    <p><slot /></p>
  </div>
</template>

<style scoped>
.info { display: flex; align-items: center; gap: 16px; padding: 12px; border-radius: 12px; background: #272729; color: #fff; font: 400 14px/20px Inter, sans-serif; }
.ic { width: 26px; height: 26px; flex: none; color: #d2cfd9; }
p { flex: 1; margin: 0; }
</style>
