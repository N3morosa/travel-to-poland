import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/cracow', name: 'Kraków', component: () => import('../views/CracowView.vue') },
  { path: '/warsaw', name: 'Warszawa', component: () => import('../views/WarsawView.vue') },
  { path: '/wroclaw', name: 'Wrocław', component: () => import('../views/WroclawView.vue') },
  { path: '/gdansk', name: 'Gdańsk', component: () => import('../views/GdanskView.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link'
});

export default router;