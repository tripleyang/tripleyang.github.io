<script setup lang="ts">
import { loadPuzzle } from "@/cells";
import Board from "@/components/Board.vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const puzzleString = computed(() => route.params.puzzle as string);

const puzzle = computed(() => {
  const puzzleJSON = atob(puzzleString.value);
  return loadPuzzle(JSON.parse(puzzleJSON));
});
const storage = localStorage;
</script>

<template>
  <Board
    :puzzle="puzzle"
    :id="puzzleString"
    @solved="
      () => {
        storage.setItem(route.params.puzzle as string, 'solved');
      }
    "
    @unsolved="
      () => {
        storage.setItem(route.params.puzzle as string, 'unsolved');
      }
    "
  ></Board>
  <a @click="router.back()" class="link">Back</a>
</template>
