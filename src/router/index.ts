import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: () => import('../views/LandingPage.vue'),
    },
    {
      path: '/keyboard',
      name: 'KeyboardPage',
      component: () => import('../views/KeyboardPage.vue'),
    },
    {
      path: '/mouse',
      name: 'MousePage',
      component: () => import('../views/MousePage.vue'),
    },
    {
      path: '/monitor',
      name: 'MonitorPage',
      component: () => import('../views/MonitorPage.vue'),
    },
    {
      path: '/audio',
      name: 'AudioPage',
      component: () => import('../views/AudioPage.vue'),
    },
    {
      path: '/controller',
      name: 'ControllerPage',
      component: () => import('../views/ControllerPage.vue'),
    },
  ],
});

export default router;
