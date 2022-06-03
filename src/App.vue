<script setup>
import LeafletMap from "./components/LeafletMap.vue";
import { ref } from "vue";

const activeSection = ref("MAP");

const setCurrentSection = (section) => {
  console.log(["CATEGORY", "SECTION", "DOCUMENT"].includes(section));
  if (["MAP", "DATA", "VISUALISATIONS"].includes(section)) {
    activeSection.value = section;
  } else {
    console.error(`Unknown section: ${section}`);
  }
};
</script>

<template>
  <div class="app">
    <div class="card">
      <div class="nav-tabs">
        <div class="tab" id="selected" @click="setCurrentSection('MAP')">
          <h4>Map</h4>
        </div>
        <div class="tab" @click="setCurrentSection('DATA')">
          <h4>Data Explorer</h4>
        </div>
        <div class="tab" @click="setCurrentSection('VISUALISATIONS')">
          <h4>Visualisations</h4>
        </div>
      </div>
      <div class="card-body">
        <LeafletMap />
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #303030;
  margin: 0;
  overflow: hiden;
  font-family: "Prompt", sans-serif;
}

.app {
  display: flex;
  justify-content: center;
  height: 100vh;
}

.card {
  position: relative;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  margin-bottom: auto;
  margin-top: auto;
  width: 100.625rem;
  height: 50.972rem;
}

.card-body {
  display: flex;
  justify-content: center;
  height: 100%;
}

.nav-tabs {
  height: 4.056rem;
  display: flex;
}

.tab {
  text-align: start;
  width: calc(100% / 3);
  background-color: #999999;
  border-bottom: solid 1px #2e3032;
}

.tab:hover {
  background-color: #fff;
}

#selected {
  background-color: #fff;
  border-bottom: none;
}

h4 {
  text-align: left;
  margin-top: 6px;
  margin-bottom: 6px;
  color: #2e3032;
  padding: 1rem;
}
</style>
