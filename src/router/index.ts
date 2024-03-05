import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import appData from '../data.json';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  {
    path: '/city/:id/:slug',
    name: 'city',
    component: () => import('../views/CityView.vue'),
    props: true,
    beforeEnter(to, from) {
      const citiesExists = appData.cities.find(
        city => city.id === parseInt(to.params.id)
      );
      if(!citiesExists) {
        return {
          name:'404View',
          params: {
            pathMatch: to.path.split('/').slice(1)
          }
        }
      }
    }
  },
  {
    path: '/sight/:id/:slug/:sightSlug',
    name: 'sight',
    component: () => import('../views/SightView.vue'),
    props: true,
  },
  { path: '/:pathMatch(.*)*',
    name: '404View',
    component: () => import('../views/404View.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link',
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
});

export default router;