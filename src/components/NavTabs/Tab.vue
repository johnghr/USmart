<script setup>
import { useAppStore } from "./stores/app";
const appStore = useAppStore();

defineProps({
  section: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="tab" id="selected" @click="appStore.setCurrentSection(section)">
    <h4>{ section }</h4>
  </div>
</template>
