<script setup>
import Tab from "./Tab.vue";
</script>

<template>
  <div class="nav-tabs">
    <Tab class="tab" :section="'Map'" />
    <Tab class="tab" :section="'Data Explorer'" />
    <Tab class="tab" :section="'Visualisations'" />
  </div>
</template>

<style>
.nav-tabs {
  height: 4.056rem;
  display: flex;
}
</style>
