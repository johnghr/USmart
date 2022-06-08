<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LCircle, LPopup } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";
import { useAppStore } from "../stores/app";
import { useDataStore } from "../stores/data";
import Toggle from "./Toggle/Toggle.vue";

const appStore = useAppStore();
const dataStore = useDataStore();

const date = ref(dataStore.newestDate);

const center = ref([57.5717, -3.4522]);
const mapOptions = {
  zoomSnap: 0.5,
};
const zoom = 6.5;
const attribution =
  '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
</script>

<style>
.map {
  height: 83%;
  width: 100%;
  padding: 1rem;
}
</style>

<template>
  <div class="map" v-if="appStore.activeSection === 'Map'">
    <div class="data-filters">
      <label for="map-date">
        Date:
        <input
          id="map-date"
          name="map-date"
          type="date"
          :min="dataStore.oldestDate"
          :max="dataStore.newestDate"
          :value="dataStore.newestDate"
          :v-model="date"
          @input="
            (event) => {
              dataStore.getMapData(event);
            }
          "
        />
      </label>
      <Toggle />
    </div>

    <LMap
      :center="center"
      :options="mapOptions"
      :minZoom="3"
      :maxZoom="15"
      ref="map"
      :zoom="zoom"
    >
      <LTileLayer :attribution="attribution" :url="url"></LTileLayer>
      <LCircle
        v-for="data in dataStore.filteredData"
        :key="data.usmart_id"
        :lat-lng="[data.Latitude, data.Longitude]"
        :radius="10"
        visible
      >
        <LPopup>
          <div>
            <b>Location:</b>
            {{ data.Location }}
            <br />
            <b>Mode:</b>
            {{ data["Class Name"] }}
            <br />
            <b>Date:</b>
            {{ data.ISODateTime.slice(0, 10) }}
            <br />
            <b>Count:</b>
            {{ data.Count }}
            <br />
            <b>Latitude:</b>
            {{ data.Latitude }}
            <br />
            <b>Longitude:</b>
            {{ data.Longitude }}
            <br />
          </div>
        </LPopup>
      </LCircle>
    </LMap>
  </div>
</template>

<style>
.data-filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}
</style>
