import { ref, type Ref } from "vue";

const pointerState: Ref<Record<number, boolean>> = ref({});

window.addEventListener("pointerdown", (e) => {
  pointerState.value[e.pointerId] = true;
});

window.addEventListener("pointerup", (e) => {
  pointerState.value[e.pointerId] = false;
});

export const usePointerState = () => {
  return pointerState;
};
