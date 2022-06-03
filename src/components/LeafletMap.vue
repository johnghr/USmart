<template>
  <div class="map">
    <l-map :center="center" :options="mapOptions" ref="map" :zoom="zoom">
      <l-tile-layer :attribution="attribution" :url="url"></l-tile-layer>
    </l-map>
  </div>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";

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
  height: 88%;
  width: 100%;
  padding: 1rem;
}
</style>
