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
// export default {
//   components: {
//     LMap,
//     LTileLayer,
//     LMarker,
//     LTooltip,
//     LocationSearch,
//   },

//   props: {
//     latlng: {
//       type: Object,
//       required: false,
//     },
//     center: {
//       type: Object,
//       required: false,
//     },
//     draggable: {
//       type: Boolean,
//       required: true,
//     },
//   },

//   watch: {
//     latlng: function (newVal) {
//       this.currentCenter = newVal;
//     },
//   },

//   data() {
//     const { latlng } = this;

//     const markerLatLng = latlng ? [latlng.lat, latlng.lng] : null;

//     let currentCenter;

//     this.center !== undefined
//       ? (currentCenter = this.center)
//       : (currentCenter = defaultCenter);

// return {
//   currentCenter,
//   markerLatLng,

//   zoom: 14,
//   ,
//   query: "",
//   results: [],
//   url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
//   attribution:
//     ,
// };
//   },
// };
</script>

<style>
.map {
  height: 90%;
  width: 90%;
}
</style>
