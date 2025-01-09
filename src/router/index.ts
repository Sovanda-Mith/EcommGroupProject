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
    {
      path: '/auth/profile',
      name: 'profile',
      component: () => import('../views/auth/profile.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/auth/profile-update',
      name: 'profileUpdate',
      component: () => import('../views/auth/profileUpdate.vue'),
      meta: { requiresAuth: true },
    },

    //===============================================>> Landing Pages
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/LandingPage.vue'),
    },

    {
      path: '/category',
      name: 'categoryPage',
      component: () => import('../views/Category.vue'),
      children: [
        {
          path: 'Keyboard',
          name: 'KeyboardPage',
          component: () => import('../views/KeyboardPage.vue'),
        },
        {
          path: 'Mouse',
          name: 'MousePage',
          component: () => import('../views/MousePage.vue'),
        },
        {
          path: 'Monitor',
          name: 'MonitorPage',
          component: () => import('../views/MonitorPage.vue'),
        },
        {
          path:'Audio',
          name:'AudioPage',
          component:()=>import('../views/AudioPage.vue')

        },
        {
          path:'Controller',
          name:'ControllerPage',
          component: () => import('../views/ControllerPage.vue'),
        }
        // {
        //   path:'Others',
        //   name:'OthersPage',
        //   component: () => import('../views/OthersPage.vue'),
        // }

      ],
      meta: { requiresAuth: true },
    },

    //===============================================>> Checkout
    {
      path: '/checkout',
      name: 'CheckoutPage',
      component: () => import('../views/checkout/CheckoutPage.vue'),
      redirect: '/checkout/cart',
      children: [
        {
          path: 'cart',
          name: 'CartPage',
          component: () => import('../views/checkout/CartPage.vue'),

        },
        {
          path: 'orderInfo',
          name: 'OrderInfo',
          component: () => import('../views/checkout/orderInfo.vue'),

        },
        {
          path: 'payment',
          name: 'PaymentPage',
          component: () => import('../views/checkout/PaymentPage.vue'),

        },
      ],
      meta: { requiresAuth: true },
    },

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
