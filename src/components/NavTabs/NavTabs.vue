<script setup>
import Tab from "./Tab.vue";
</script>

<template>
  <div class="nav-tabs">
    <Tab class="tab" :section="'Map'" id="map" />
    <Tab class="tab" :section="'Data Explorer'" id="data-explorer" />
    <Tab class="tab" :section="'Visualisations'" id="visualisations" />
  </div>
</template>

<style>
.nav-tabs {
  height: 4.056rem;
  display: flex;
}

/* #map {
  border-left: none;
  border-right: none;
}

#data-explorer {
  border-right: none;
  border-left: none;
}

#visualisations {
  border-left: none;
} */
</style>
