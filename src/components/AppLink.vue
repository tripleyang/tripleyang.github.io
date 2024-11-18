<script setup lang="ts">
import LiftHover from "./LiftHover.vue";

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <LiftHover>
    <a
      class="cursor-pointer font-semibold text-slate-700 transition-colors hover:text-black"
      v-bind="$attrs"
      ><slot />
    </a>
  </LiftHover>
</template>
