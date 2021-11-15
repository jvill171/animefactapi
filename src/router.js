import { createRouter, createWebHistory } from "vue-router";

import Index from "./pages/index.vue";
import AnimeFacts from "./pages/anime-facts.vue";
import NotFound from "./pages/404.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/anime-facts/:id",
    name: "AnimeFacts",
    component: AnimeFacts,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
