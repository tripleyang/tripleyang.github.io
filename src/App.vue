<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavLink from "./components/NavLink.vue";
</script>

<template>
  <div class="flex h-screen flex-col items-center overflow-auto bg-slate-100">
    <div class="flex w-full max-w-screen-md flex-col gap-4 px-2 pt-2">
      <p>
        <span class="text-2xl font-bold">triple yang</span>
        <span class="pl-2 text-sm text-slate-600">by avi</span>
      </p>

      <nav class="flex gap-2">
        <NavLink to="/">Welcome</NavLink>
        <NavLink to="/triple-yang/5x5">5x5</NavLink>
        <NavLink to="/triple-yang/6x6">6x6</NavLink>
        <NavLink to="/triple-yang/7x7">7x7</NavLink>
        <NavLink to="/triple-yang/8x8">8x8</NavLink>
        <NavLink to="/triple-yang/9x9">9x9</NavLink>
        <NavLink to="/triple-yang/10x10">10x10</NavLink>
      </nav>

      <RouterView />
    </div>
  </div>
</template>
