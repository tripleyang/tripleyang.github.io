<script setup lang="ts">
import LiftHover from "./LiftHover.vue";

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <LiftHover>
    <a
      class="font-semibold text-slate-700 transition-colors hover:text-black"
      v-bind="$attrs"
      href="#!"
      ><slot />
    </a>
  </LiftHover>
</template>
