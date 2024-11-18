<script setup lang="ts">
import { puzzleCollection } from "@/puzzles";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const category = computed(() => route.params.category as string);
const puzzles = computed(() => puzzleCollection[category.value]);
const storage = localStorage;
</script>
<template>
  <div class="grid grid-cols-10 gap-1">
    <RouterLink
      v-for="(puzzle, n) in puzzles"
      :to="`/yy3/puzzle/${puzzle}`"
      class="flex aspect-square flex-col items-center justify-center gap-1 rounded-md shadow-sm transition-all hover:shadow-md"
      :class="{
        'border border-lime-400 bg-lime-200':
          storage.getItem(puzzle) == 'solved',
        'border border-slate-300 bg-slate-200':
          storage.getItem(puzzle) != 'solved' &&
          storage.getItem(`progress_state_${puzzle}`) == null,
        'border border-yellow-400 bg-yellow-200':
          storage.getItem(puzzle) != 'solved' &&
          storage.getItem(`progress_state_${puzzle}`) != null,
      }"
      ><div class="text-2xl">
        {{ n }}
      </div>
      <div class="text-xs">
        {{ category }}
      </div></RouterLink
    >
  </div>
</template>
