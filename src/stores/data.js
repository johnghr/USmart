import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const newestDate = ref(null);
  const oldestDate = ref(null);
  const currentData = ref([]);
  const filteredData = ref([]);
  const selectedClassName = ref("");

  const setupInitialData = async () => {
    await Promise.all([
      fetch(
        "https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/02444e7a-5bd4-4ef3-9c66-e26671bb4c8a/latest/urql?sort(-ISODateTime)&limit(151)"
      )
        .then((response) => response.json())
        .then((data) => {
          currentData.value = data;
          filterByClassName("pedestrian");
          newestDate.value = currentData.value[0].ISODateTime.slice(0, 10);
        }),
      fetch(
        "https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/02444e7a-5bd4-4ef3-9c66-e26671bb4c8a/latest/urql?sort(+ISODateTime)&limit(1)"
      )
        .then((response) => response.json())
        .then((data) => (oldestDate.value = data[0].ISODateTime.slice(0, 10))),
    ]);
  };

  const getData = async (event) => {
    await fetch(
      `https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/02444e7a-5bd4-4ef3-9c66-e26671bb4c8a/1/urql?ISODateTime=${event.target.value}T00%3A00%3A00`
    )
      .then((response) => response.json())
      .then((data) => {
        currentData.value = data;
        filterByClassName(selectedClassName.value);
        console.log("filteredData", filteredData.value);
      });
  };

  const filterByClassName = (className) => {
    selectedClassName.value = className;
    filteredData.value = currentData.value.filter(
      (data) => data["Class Name"] === className
    );
  };

  return {
    currentData,
    filteredData,
    newestDate,
    oldestDate,
    selectedClassName,
    filterByClassName,
    getData,
    setupInitialData,
  };
});
