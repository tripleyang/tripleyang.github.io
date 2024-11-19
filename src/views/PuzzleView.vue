<script setup lang="ts">
import { type CellState, type Grid, loadPuzzle, type Puzzle } from "@/cells";
import AppLink from "@/components/AppLink.vue";
import Board from "@/components/Board.vue";
import { storeToRefs } from "pinia";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const storage = localStorage;
const route = useRoute();
const router = useRouter();

const puzzleString = computed(() => route.params.puzzle as string);

const puzzle = computed(() => {
  const puzzleJSON = atob(puzzleString.value);
  return loadPuzzle(JSON.parse(puzzleJSON));
});

const initializeCells = (puzzle: Puzzle) => {
  const initialCells: Grid<CellState> = Array.from(
    { length: puzzle.width },
    (_, i) => Array.from({ length: puzzle.height }, () => undefined),
  );

  const savedState = storage.getItem(`progress_state_${puzzleString.value}`);
  const savedCells: Grid<CellState> = savedState ? JSON.parse(savedState) : [];
  for (const x in savedCells) {
    for (const y in savedCells[x]) {
      if (savedCells[x][y] != undefined) {
        initialCells[x][y] = savedCells[x][y];
      }
    }
  }

  return initialCells;
};

const cells = ref<Grid<CellState>>(initializeCells(puzzle.value));

watch(puzzle, (puzzle) => {
  cells.value = initializeCells(puzzle);
});

const setCell = (x: number, y: number, state: CellState) => {
  cells.value[x][y] = state;

  storage.setItem(
    `progress_state_${puzzleString.value}`,
    JSON.stringify(cells.value),
  );
};
</script>

<template>
  <Board
    :cells="cells"
    :puzzle="puzzle"
    :id="puzzleString"
    @cell-changed="setCell"
    @solved="
      () => {
        storage.setItem(puzzleString, 'solved');
      }
    "
    @reset="
      () => {
        storage.setItem(puzzleString, 'unsolved');
        storage.removeItem(`progress_state_${puzzleString}`);
        cells = initializeCells(puzzle);
      }
    "
  ></Board>
  <div class="flex items-start">
    <AppLink @click="router.back()"> Back </AppLink>
  </div>
</template>
