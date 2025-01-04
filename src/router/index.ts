import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //===============================================>> Auth
    // { 
    //   path: '/', redirect: '/auth/login' // Default route redirects to login
    // }, 
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/auth/login.vue'),
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: () => import('../views/auth/signup.vue'),
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/auth/terms.vue'),
    },

    //===============================================>> Landing Pages
    {
      path: '/',
      name: 'Home',
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
    {
      path: '/cart',
      name: 'CartPage',
      component: () => import('../views/CartPage.vue'),
    },
    {
      path: '/checkout',
      name: 'CheckoutPage',
      component: () => import('../views/checkOutPage.vue'),
    },
  ],
});

export default router;
