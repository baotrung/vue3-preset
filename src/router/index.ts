import { createRouter, RouterOptions, createWebHistory } from 'vue-router';
import HomePage from '@src/pages/HomePage.vue';

const options: RouterOptions = {
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
  ],
};

export const router = createRouter(options);
