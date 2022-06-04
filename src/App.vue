<script setup>
import { onBeforeMount } from "vue";
import Map from "./components/Map.vue";
import NavTabs from "./components/NavTabs/NavTabs.vue";
import { useDataStore } from "./stores/data";
import DataExplorer from "./components/DataExplorer.vue";
import Visualisations from "./components/Visualisations.vue";

const dataStore = useDataStore();

const logData = () => dataStore.data.forEach((datum) => console.log(datum));

onBeforeMount(dataStore.setupInitialData());
</script>

<template>
  <div class="app">
    <div class="card">
      <NavTabs />
      <div class="card-body">
        <Map />
        <DataExplorer />
        <Visualisations />
      </div>
      <button @click="logData()">Push me</button>
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
  padding: 1.438rem 1.563rem;
}
</style>
