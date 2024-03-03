import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  {
    path: '/city/:id/:slug',
    name: 'city',
    component: () => import('../views/ShowCityView.vue'),
    props: true,
  },
  {
    path: '/sight/:id/:slug/:sightSlug',
    name: 'sight',
    component: () => import('../views/ShowSightView.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link'
});

export default router;