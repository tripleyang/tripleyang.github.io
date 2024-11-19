<script setup lang="ts">
import { provide, ref, watch } from "vue";
import { type CellState, type Grid, type Puzzle } from "@/cells";
import Cell from "@/components/Cell.vue";
import AppButton from "@/components/AppButton.vue";

const props = defineProps<{
  puzzle: Puzzle;
  cells: Grid<CellState>;
  id: string;
}>();

const emits = defineEmits<{
  (e: "solved"): void;
  (e: "reset"): void;
  (e: "cellChanged", x: number, y: number, state: CellState): void;
}>();

const getCell = (x: number, y: number) => {
  return (props.puzzle.clues[x] || {})[y] || (props.cells[x] || {})[y];
};

const isClue = (x: number, y: number) => {
  return (props.puzzle.clues[x] || {})[y] != undefined;
};

const isSolved = () => {
  const components: Map<number, number> = new Map();

  for (let y = 0; y < props.puzzle.height; y++) {
    for (let x = 0; x < props.puzzle.width; x++) {
      const c = getCell(x, y);
      if (c == undefined || c < 1) {
        return false;
      }

      const n = x + y * props.puzzle.height;
      components.set(n, n);

      const leftN = n - 1;
      const left = getCell(x - 1, y);
      const topN = n - props.puzzle.height;
      const top = getCell(x, y - 1);

      if (c == left) {
        components.set(n, components.get(leftN)!);
      }

      if (c == top) {
        if (components.get(n) == n) {
          components.set(n, components.get(topN)!);
        } else {
          const a = components.get(n)!;
          const b = components.get(topN)!;
          for (let m = 0; m <= n; m++) {
            if (components.get(m) == a || components.get(m) == b) {
              components.set(m, Math.min(a, b));
            }
          }
        }
      }

      const topLeft = getCell(x - 1, y - 1);
      if (c == left && c == top && c == topLeft) {
        return false;
      }
    }
  }

  const componentsSet = new Set(components.values());
  return componentsSet.size == 3;
};

const isSolvedRef = ref(isSolved());

const checkSolved = () => {
  isSolvedRef.value = isSolved();
  if (isSolvedRef.value) {
    emits("solved");
  }
};

const reset = () => {
  emits("reset");
};
</script>
<template>
  <div
    class="flex flex-col rounded-md bg-slate-200 p-0.5"
    :class="{
      'outline outline-2 outline-offset-4 outline-lime-400': isSolvedRef,
    }"
  >
    <div v-for="y in props.puzzle.height" class="flex flex-row">
      <Cell
        v-for="x in props.puzzle.width"
        :locked="isClue(x - 1, y - 1)"
        :state="getCell(x - 1, y - 1)"
        @state-changed="
          (state: CellState) => {
            emits('cellChanged', x - 1, y - 1, state);
            checkSolved();
          }
        "
      ></Cell>
    </div>
    <div class="flex flex-row items-center gap-1 p-1">
      <div v-if="isSolvedRef" class="px-2 text-xl font-semibold">Solved!</div>

      <div class="flex-1" />

      <AppButton
        class="justify-self-end bg-red-500 font-semibold text-white"
        @click="reset"
      >
        Reset
      </AppButton>
    </div>
  </div>
</template>
