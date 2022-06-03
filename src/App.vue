<script setup>
console.log("hello");
</script>

<template>
  <div class="app">
    <div class="card">
      <div class="nav-tabs">
        <div class="tab" id="selected"><h4>Map</h4></div>
        <div class="tab"><h4>Data Explorer</h4></div>
        <div class="tab"><h4>Visualisations</h4></div>
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

.nav-tabs {
  height: 4.056rem;
  display: flex;
}

.tab {
  text-align: start;
  width: calc(100% / 3);
  background-color: #6c6c6c;
  /* border-bottom: solid 1px #2e3032 !important; */
}

#selected {
  background-color: #fff;
  border: none;
}

h4 {
  text-align: left;
  margin-top: 6px;
  margin-bottom: 6px;
  color: #2e3032;
  padding: 1rem;
}
</style>
