import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const open = ref(false);
  const activeSection = ref("Map");

  const setCurrentSection = (section) => {
    console.log("section on entry", section);
    console.log(["Map", "Data Explorer", "Visualisations"].includes(section));
    if (["Map", "Data Explorer", "Visualisations"].includes(section)) {
      activeSection.value = section;
    } else {
      console.error(`Unknown section: ${section}`);
    }
  };

  return {
    open,
    activeSection,
    setCurrentSection,
  };
});
