<template><span class="tile"><slot /></span></template>

<style scoped>
.tile { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 8px; background: #272729; color: #d2cfd9; }
.tile :deep(svg) { width: 16px; height: 16px; }
</style>
