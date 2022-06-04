import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const initialDate = ref(null);
  // const currentData = ref([]);
  const currentData = ref([]);

  const getCurrentData = async () => {
    await fetch(
      "https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/02444e7a-5bd4-4ef3-9c66-e26671bb4c8a/latest/urql?sort(-ISODateTime)&limit(151)"
    )
      .then((response) => response.json())
      .then((responseData) => (currentData.value = responseData));
    initialDate.value = currentData.value[0].ISODateTime.slice(0, 10);
  };

  const getData = async (event) => {
    await fetch(
      `https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/02444e7a-5bd4-4ef3-9c66-e26671bb4c8a/1/urql?ISODateTime=${event.target.value}T00%3A00%3A00`
    )
      .then((response) => response.json())
      .then((data) => (currentData.value = data));
  };

  return {
    initialDate,
    currentData,
    getData,
    getCurrentData,
  };
});
