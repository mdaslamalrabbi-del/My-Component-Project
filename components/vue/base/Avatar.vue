<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 46 });
</script>

<template><span class="avatar" :style="{ width: size + 'px', height: size + 'px' }" /></template>

<style scoped>
.avatar { display: inline-block; border-radius: 50%; background: #000; }
</style>
