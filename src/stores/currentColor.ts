import { ref } from "vue";
import { defineStore } from "pinia";
import type { Color } from "@/cells";

export const useCurrentColorStore = defineStore("currentColor", () => {
  const currentColor = ref<Color>(1);

  const nextColor = () => {
    currentColor.value = (currentColor.value % 3) + 1;
  };

  const prevColor = () => {
    currentColor.value = ((currentColor.value + 4) % 3) + 1;
  };

  return { currentColor, nextColor, prevColor };
});
