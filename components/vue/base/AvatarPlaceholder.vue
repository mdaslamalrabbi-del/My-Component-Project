<script setup lang="ts">
withDefaults(defineProps<{ src: string; alt: string; size?: number }>(), { size: 46 });
</script>

<template>
  <img :src="src" :alt="alt" :width="size" :height="size" class="avatar" />
</template>

<style scoped>
.avatar { border-radius: 50%; object-fit: cover; }
</style>
