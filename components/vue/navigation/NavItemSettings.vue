<script setup lang="ts">
import NavItem from "./NavItem.vue";
withDefaults(defineProps<{ label?: string; active?: boolean }>(), { label: "General" });
</script>

<template>
  <div class="wrap">
    <NavItem :label="label" :state="active ? 'active2' : 'default'"><template #icon><slot name="icon" /></template></NavItem>
  </div>
</template>

<style scoped>.wrap { width: 278px; max-width: 100%; }</style>
