<template><span class="tile"><slot /></span></template>

<style scoped>
.tile { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 8px; background: #272729; color: #d2cfd9; }
.tile :deep(svg) { width: 20px; height: 20px; }
</style>
