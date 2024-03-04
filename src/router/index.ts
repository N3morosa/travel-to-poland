import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  {
    path: '/city/:id/:slug',
    name: 'city',
    component: () => import('../views/CityView.vue'),
    props: true,
  },
  {
    path: '/sight/:id/:slug/:sightSlug',
    name: 'sight',
    component: () => import('../views/SightView.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link'
});

export default router;