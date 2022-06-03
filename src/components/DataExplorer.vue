<script setup>
import { useAppStore } from "../stores/app";
const appStore = useAppStore();
</script>
<template setup>
  <h4 style="color: black" v-if="appStore.activeSection === 'Data Explorer'">
    I'm the Data Explorer
  </h4>
</template>
