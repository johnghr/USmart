<script setup>
import LeafletMap from "./components/LeafletMap.vue";
import NavTabs from "./components/NavTabs/NavTabs.vue";
</script>

<template>
  <div class="app">
    <div class="card">
      <NavTabs />
      <div class="card-body">
        <LeafletMap />
      </div>
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
}

h4 {
  text-align: left;
  margin-top: 6px;
  margin-bottom: 6px;
  color: #2e3032;
  padding: 1rem;
}
</style>
