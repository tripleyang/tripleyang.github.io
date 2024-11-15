<script setup lang="ts">
import { ref, watch } from "vue";
import { type CellState, type Grid, type Puzzle } from "@/cells";
import Cell from "@/components/Cell.vue";
import AppButton from "@/components/AppButton.vue";

const props = defineProps<{
  puzzle: Puzzle;
  id: string;
}>();

const emits = defineEmits<{
  (e: "solved"): void;
  (e: "unsolved"): void;
}>();

const saved_state = localStorage.getItem(`progress_state_${props.id}`);
const cells = ref<Grid<CellState>>(saved_state ? JSON.parse(saved_state) : []);

const saveToStorage = () => {
  localStorage.setItem(
    `progress_state_${props.id}`,
    JSON.stringify(cells.value),
  );
};

const getCell = (x: number, y: number) => {
  return (props.puzzle.clues[x] || {})[y] || (cells.value[x] || {})[y];
};

const isClue = (x: number, y: number) => {
  return (props.puzzle.clues[x] || {})[y] != undefined;
};

const setCell = (x: number, y: number, state: CellState) => {
  cells.value[x] = cells.value[x] || {};
  cells.value[x][y] = state;

  saveToStorage();
};

const reset = () => {
  cells.value = [];
  localStorage.removeItem(`progress_state_${props.id}`);
  emits("unsolved");
};
</script>
<template>
  <div class="flex flex-col rounded-md bg-slate-200 p-0.5">
    <div v-for="y in props.puzzle.height" class="flex flex-row">
      <Cell
        v-for="x in props.puzzle.width"
        :locked="isClue(x - 1, y - 1)"
        :state="getCell(x - 1, y - 1)"
        @state-changed="
          (state: CellState) => {
            setCell(x - 1, y - 1, state);
          }
        "
      ></Cell>
    </div>
    <div class="flex flex-row justify-center gap-1 p-1">
      <AppButton
        class="border border-slate-300 bg-slate-50"
        @click="emits('solved')"
      >
        Mark as solved
      </AppButton>
      <AppButton class="bg-red-500 font-semibold text-white" @click="reset">
        Reset
      </AppButton>
    </div>
  </div>
</template>
