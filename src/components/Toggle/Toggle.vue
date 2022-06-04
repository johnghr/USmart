<template>
  <span class="toggle">
    <button
      type="button"
      class="button-left"
      :class="[
        dataStore.selectedClassName === 'pedestrian' ? selectedLeft : '',
      ]"
      @click="dataStore.filterByClassName('pedestrian')"
    >
      <Pedestrian style="height: 1.25rem; width: 1.25rem" aria-hidden="true" />
    </button>
    <button
      type="button"
      class="button-right"
      :class="[dataStore.selectedClassName === 'bicycle' ? selectedRight : '']"
      @click="dataStore.filterByClassName('bicycle')"
    >
      <Bicycle style="height: 1.25rem; width: 1.25rem" aria-hidden="true" />
    </button>
  </span>
</template>

<script setup>
import { useDataStore } from "../../stores/data";

import Bicycle from "../Icons/Bicycle.vue";
import Pedestrian from "../Icons/Pedestrian.vue";

const dataStore = useDataStore();

const selectedLeft = "selected-left";
const selectedRight = "selected-right";
</script>

<style>
.toggle {
  position: relative;
  z-index: 0;
  display: inline-flex;
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.button-left {
  position: relative;
  margin-left: -1px;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid grey;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
}
.button-right {
  position: relative;
  margin-left: -1px;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid grey;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  border-top-left-radius: none;
  border-bottom-left-radius: none;

  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
}

.selected-left {
  position: relative;
  margin-left: -1px;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid grey;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  background-color: rgb(76, 76, 76);
}
.selected-right {
  position: relative;
  margin-left: -1px;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid grey;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  background-color: rgb(76, 76, 76);
}
</style>
