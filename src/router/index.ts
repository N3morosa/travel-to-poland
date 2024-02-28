import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/cracow', name: 'Cracow', component: () => import('../views/CracowView.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;