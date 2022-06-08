<script setup>
import { useAppStore } from "../../stores/app";
import { useDataStore } from "../../stores/data";
import LineChart from "./LineChart";

const appStore = useAppStore();
const dataStore = useDataStore();
</script>

<template>
  <div class="visualisation" v-if="appStore.activeSection === 'Visualisations'">
    <div class="data-filters">
      <label for="location-selector">
        <select name="location-selector" id="location-selector">
          <option value="please choose">please choose a location:</option>
          <option
            v-for="location in dataStore.locations"
            :key="location"
            :value="location"
            @click="
              (event) => {
                dataStore.getLocationData(event);
              }
            "
          >
            {{ location }}
          </option>
        </select>
      </label>
    </div>
    <div class="chart-container">
      <LineChart />
    </div>
  </div>
</template>

<style>
.visualisation {
  width: 100%;
}
.chart-container {
  display: flex;
  display: flex;
  margin-top: 10rem;
  justify-content: center;
}
</style>
