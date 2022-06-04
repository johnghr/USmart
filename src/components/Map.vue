<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LCircle, LPopup } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";
import { useAppStore } from "../stores/app";
import { useDataStore } from "../stores/data";

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
    <label for="map-date">
      Select a date:
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
            dataStore.getData(event);
          }
        "
      />
    </label>

    <LMap :center="center" :options="mapOptions" ref="map" :zoom="zoom">
      <LTileLayer :attribution="attribution" :url="url"></LTileLayer>
      <LCircle
        v-for="data in dataStore.currentData"
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
            {{ data.ClassName }}
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
