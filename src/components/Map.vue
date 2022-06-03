<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LCircle, LPopup } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";
import { useAppStore } from "../stores/app";
import { useDataStore } from "../stores/data";
const appStore = useAppStore();
const dataStore = useDataStore();

const center = ref([56.0717, -3.4522]);
const mapOptions = {
  zoomSnap: 0.5,
};
const zoom = 14;
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
    <l-map :center="center" :options="mapOptions" ref="map" :zoom="zoom">
      <l-tile-layer :attribution="attribution" :url="url"></l-tile-layer>
      <l-circle
        v-for="data in dataStore.data"
        :key="data.usmart_id"
        :lat-lng="[data.Latitude, data.Longitude]"
        :radius="10"
        visible
      >
        <l-popup>
          <div>
            <b>Location:</b>
            {{ data.Location }}
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
        </l-popup>
      </l-circle>
    </l-map>
  </div>
</template>
