import { createRouter, createWebHashHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import PuzzleListView from "@/views/PuzzleListView.vue";
import PuzzleView from "../views/PuzzleView.vue";
import HelpView from "@/views/HelpView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AboutView,
    },
    {
      path: "/help",
      name: "help",
      component: HelpView,
    },
    {
      path: "/yy3/:category",
      component: PuzzleListView,
    },
    {
      path: "/yy3/puzzle/:puzzle",
      component: PuzzleView,
    },
  ],
});

export default router;
