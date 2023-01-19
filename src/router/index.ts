import { createRouter, RouterOptions, createWebHistory } from "vue-router";
import Home from "@src/pages/Home.vue";

const options: RouterOptions = {
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
};

export const router = createRouter(options);
