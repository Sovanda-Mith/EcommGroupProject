import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
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
      meta: { requiresAuth: true },
    },
    {
      path: '/mouse',
      name: 'MousePage',
      component: () => import('../views/MousePage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/monitor',
      name: 'MonitorPage',
      component: () => import('../views/MonitorPage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/audio',
      name: 'AudioPage',
      component: () => import('../views/AudioPage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/controller',
      name: 'ControllerPage',
      component: () => import('../views/ControllerPage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/cart',
      name: 'CartPage',
      component: () => import('../views/checkout/CartPage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/checkout',
      name: 'CheckoutPage',
      component: () => import('../views/checkout/checkOutPage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/payment',
      name: 'PaymentPage',
      component: () => import('../views/checkout/PaymentPage.vue'),
      meta: { requiresAuth: true },
    }
  ],
});

// Add navigation guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/auth/login'); // Redirect to login if not authenticated
  } else {
    next(); // Allow navigation
  }
});

export default router;
