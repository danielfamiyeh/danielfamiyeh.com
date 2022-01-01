import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () =>
      import(/* webpackChunkName: "photos" */ '../views/Photos.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
