<script setup>
import { useAppStore } from "../../stores/app";
const appStore = useAppStore();

defineProps({
  section: {
    type: String,
    required: true,
  },
  isSelected: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <div
    class="tab"
    :class="{ selected: section === appStore.activeSection }"
    @click="appStore.setCurrentSection(section)"
  >
    <h4>{{ section }}</h4>
  </div>
</template>

<style>
.tab {
  text-align: start;
  width: calc(100% / 3);
  background-color: #999999;
  border-bottom: solid 2px #2e3032;
}

.tab:hover {
  background-color: #fff;
}

.selected {
  background-color: #fff;
  border-bottom: none;
  border-right: solid 2px #2e3032;
  border-left: solid 2px #2e3032;
}

h4 {
  text-align: left;
  margin-top: 6px;
  margin-bottom: 6px;
  color: #2e3032;
  padding: 1rem;
}
</style>
