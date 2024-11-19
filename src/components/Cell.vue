<script setup lang="ts">
import type { CellState } from "@/cells";
import { useCurrentColorStore } from "@/stores/currentColor";
import { usePointerState } from "@/usePointerState";
import { useKeyModifier } from "@vueuse/core";
import { inject, ref, type Ref } from "vue";

const emit = defineEmits<{
  (e: "stateChanged", state: CellState): void;
}>();

const props = defineProps<{
  state: CellState;
  locked: boolean;
}>();

const colorStore = useCurrentColorStore();

const negMode = useKeyModifier<boolean>("Shift", { initial: false });

const pointerState = usePointerState();

const onDown = (e: PointerEvent) => {
  e.preventDefault();

  if (e.button == 0) {
    if (props.state == colorStore.currentColor) {
      colorStore.nextColor();

      if (colorStore.currentColor == 1) {
        emit("stateChanged", undefined);

        return;
      }
    }

    let color = colorStore.currentColor;
    if (negMode.value) {
      color *= -1;
    }

    emit("stateChanged", color);
  } else if (e.button == 2) {
    emit("stateChanged", undefined);
  }

  (e.target as Element).releasePointerCapture(e.pointerId);
};

const onContextMenu = (e: MouseEvent) => {
  e.preventDefault();
};

const onEnter = (e: PointerEvent) => {
  e.preventDefault();

  if (!pointerState.value[e.pointerId]) {
    return;
  }

  if ((e.buttons & 1) == 1) {
    let color = colorStore.currentColor;
    if (negMode.value) {
      color *= -1;
    }

    emit("stateChanged", color);
  }

  if ((e.buttons & 2) == 2) {
    emit("stateChanged", undefined);
  }
};

const onWheel = (e: WheelEvent) => {
  e.preventDefault();

  if (e.deltaY > 0) {
    colorStore.nextColor();
  } else if (e.deltaY < 0) {
    colorStore.prevColor();
  }
};
</script>
<template>
  <div
    class="group aspect-square flex-1 touch-none p-0.5"
    @pointerdown="onDown"
    @pointerover="onEnter"
    @contextmenu="onContextMenu"
    @wheel="onWheel"
  >
    <div
      class="relative size-full rounded-md"
      :class="{
        'bg-slate-300': props.state == undefined || props.state < 0,
        'bg-color-1': props.state == 1,
        'bg-color-2': props.state == 2,
        'bg-color-3': props.state == 3,
        'shadow-sm': props.state != undefined,
      }"
    >
      <!-- negative state overlay -->
      <div
        v-if="props.state && props.state < 0"
        class="absolute inset-6 rounded-md border border-black border-opacity-15"
        :class="{
          'bg-color-neg-1': props.state == -1,
          'bg-color-neg-2': props.state == -2,
          'bg-color-neg-3': props.state == -3,
        }"
      ></div>

      <!-- hover overlay -->
      <div
        class="absolute rounded-md opacity-0"
        :class="{
          'group-hover:opacity-50': !locked,
          'inset-2': !negMode,
          'inset-6': negMode,
          'bg-color-1': colorStore.currentColor == 1 && !negMode,
          'bg-color-2': colorStore.currentColor == 2 && !negMode,
          'bg-color-3': colorStore.currentColor == 3 && !negMode,
          'bg-color-neg-1': colorStore.currentColor == 1 && negMode,
          'bg-color-neg-2': colorStore.currentColor == 2 && negMode,
          'bg-color-neg-3': colorStore.currentColor == 3 && negMode,
        }"
      ></div>
      <!-- locked overlay -->
      <div
        v-if="locked"
        class="absolute flex size-full items-center justify-center"
      >
        <div class="h-2 w-2 rounded-sm bg-slate-300"></div>
      </div>
    </div>
  </div>
</template>
