<template><div class="scroll"><slot /></div></template>

<style scoped>
.scroll { overflow-y: auto; scrollbar-width: thin; scrollbar-color: #333137 transparent; }
.scroll::-webkit-scrollbar { width: 6px; }
.scroll::-webkit-scrollbar-thumb { border-radius: 4px; background: #333137; }
.scroll::-webkit-scrollbar-thumb:hover { background: #d2cfd9; }
</style>
