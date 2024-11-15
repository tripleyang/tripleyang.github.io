import { createRouter, createWebHashHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import PuzzleListView from "@/views/PuzzleListView.vue";
import PuzzleView from "../views/PuzzleView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AboutView,
    },
    {
      path: "/triple-yang/:category",
      component: PuzzleListView,
    },
    {
      path: "/triple-yang/puzzle/:puzzle",
      component: PuzzleView,
    },
  ],
});

export default router;
