<script setup lang="ts">
import { type RouterLinkProps } from "vue-router";

const props = defineProps<RouterLinkProps>();
</script>
<template>
  <RouterLink class="group font-semibold" v-slot="{ isActive }" :to="props.to">
    <div
      class="transition-all hover:text-black group-hover:-translate-y-0.5"
      :class="isActive ? 'text-slate-700' : 'text-slate-400'"
    >
      <slot />
    </div>
  </RouterLink>
</template>
