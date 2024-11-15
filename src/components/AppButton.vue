<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});
</script>
<template>
  <button class="group">
    <div
      v-bind="$attrs"
      class="rounded-md p-2 shadow-sm transition-all group-hover:-translate-y-0.5 group-hover:shadow-md"
    >
      <slot />
    </div>
  </button>
</template>
