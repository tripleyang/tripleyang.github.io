<script setup lang="ts">
import { type RouterLinkProps } from "vue-router";
import LiftHover from "./LiftHover.vue";

const props = defineProps<RouterLinkProps>();

defineOptions({
  inheritAttrs: false,
});
</script>
<template>
  <RouterLink v-slot="{ isActive }" class="font-semibold" :to="props.to">
    <LiftHover
      class="transition-colors hover:text-black"
      :class="isActive ? 'text-slate-700' : 'text-slate-400'"
    >
      <slot />
    </LiftHover>
  </RouterLink>
</template>
