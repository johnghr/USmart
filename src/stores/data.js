import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const data = ref([]);

  const getData = async () => {
    await fetch(
      "https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/02444e7a-5bd4-4ef3-9c66-e26671bb4c8a/latest/urql"
    )
      .then((response) => response.json())
      .then((responseData) => (data.value = responseData));

    console.log(data.value);
  };
  return {
    data,
    getData,
  };
});
