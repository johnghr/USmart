import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const newestDate = ref(null);
  const oldestDate = ref(null);
  const currentData = ref([]);
  const filteredData = ref([]);
  const selectedClassName = ref("");
  const locations = ref([]);
  const currentLocationData = ref([]);

  const setupInitialData = async () => {
    await Promise.all([
      fetch(
        "https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/02444e7a-5bd4-4ef3-9c66-e26671bb4c8a/latest/urql?sort(-ISODateTime)&limit(152)"
      )
        .then((response) => response.json())
        .then((data) => {
          currentData.value = data;
          filterByClassName("pedestrian");
          newestDate.value = currentData.value[0].ISODateTime.slice(0, 10);
          locations.value = currentData.value
            .map((data) => data.Location)
            .sort();
          console.log(locations.value);
          // locations.value = currentData.value.map((data) => {
          //   locations.value.push(data.Location);
          //   locations.value.sort();
          // });
        }),
      fetch(
        "https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/02444e7a-5bd4-4ef3-9c66-e26671bb4c8a/latest/urql?sort(+ISODateTime)&limit(1)"
      )
        .then((response) => response.json())
        .then((data) => (oldestDate.value = data[0].ISODateTime.slice(0, 10))),
    ]);
  };

  const getMapData = async (event) => {
    await fetch(
      `https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/02444e7a-5bd4-4ef3-9c66-e26671bb4c8a/1/urql?ISODateTime=${event.target.value}T00%3A00%3A00`
    )
      .then((response) => response.json())
      .then((data) => {
        currentData.value = data;
        console.log(currentData.value, currentData.value.length);
        filterByClassName(selectedClassName.value);
      });
  };

  const getLocationData = async (event) => {
    const uri = encodeURIComponent(event.target.value)
      .replace(/\(/g, "%28")
      .replace(/\)/g, "%29");

    await fetch(
      `https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/02444e7a-5bd4-4ef3-9c66-e26671bb4c8a/1/urql?Location=${uri}`
    )
      .then((response) => response.json())
      .then((data) => {
        currentLocationData.value = data;
        console.log(currentLocationData.value);
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
    locations,
    newestDate,
    oldestDate,
    selectedClassName,
    filterByClassName,
    getLocationData,
    getMapData,
    setupInitialData,
  };
});
