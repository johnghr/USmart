<template>
  <span class="toggle">
    <!-- <button
      type="button"
      class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
    > -->
    <button class="button-left">
      <Pedestrian style="height: 1.25rem; width: 1.25rem" aria-hidden="true" />
    </button>
    <button type="button" class="button-right">
      <Bicycle style="height: 1.25rem; width: 1.25rem" aria-hidden="true" />
    </button>
  </span>
</template>

<script setup>
import Bicycle from "../Icons/Bicycle.vue";
import Pedestrian from "../Icons/Pedestrian.vue";
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
  color: gray;
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
  color: gray;
}
</style>
