<script setup>
import { useAppStore } from "../stores/app";
const appStore = useAppStore();
</script>

<template>
  <div v-if="appStore.activeSection === 'Visualisations'">
    I'm visualisations
  </div>
</template>
