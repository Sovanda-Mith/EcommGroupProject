import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
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
      path: '/search',
      name: 'SearchResults',
      component: () => import('../components/ProductCatalogComponent/SearchResults.vue'),
    },

    {
      path: '/category',
      name: 'categoryPage',
      component: () => import('../views/category/Category.vue'),
      children: [
        {
          path: 'Keyboard',
          name: 'KeyboardPage',
          component: () => import('../views/category/KeyboardPage.vue'),
        },
        {
          path: 'Mouse',
          name: 'MousePage',
          component: () => import('../views/category/MousePage.vue'),
        },
        {
          path: 'Monitor',
          name: 'MonitorPage',
          component: () => import('../views/category/MonitorPage.vue'),
        },
        {
          path: 'Audio',
          name: 'AudioPage',
          component: () => import('../views/category/AudioPage.vue'),
        },
        {
          path: 'Controller',
          name: 'ControllerPage',
          component: () => import('../views/category/ControllerPage.vue'),
        },
        {
          path: 'Others',
          name: 'OthersPage',
          component: () => import('../views/category/OtherPage.vue'),
        },
        {
          path: 'Discount',
          name: 'DiscountPage',
          component: () => import('../views/category/discountPage.vue'),
        },
        {
          path: 'Budget',
          name: 'BudgetPage',
          component: () => import('../views/category/BudgetProductPage.vue'),
        },
        {
          path: 'Hot',
          name: 'HotPage',
          component: () => import('../views/category/HotProductPage.vue'),
        },
      ],
      meta: { requiresAuth: true },
    },
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
        {
          path: 'cashOnSucess',
          name: 'CashOnSucess',
          component: () => import('../views/checkout/CashOnSucess.vue'),
        },
      ],
      meta: { requiresAuth: true },
    },
    {
      path: '/orders',
      name: 'OrdersPage',
      component: () => import('../views/OrdersPage.vue'),
    },
    {
      path: '/wishlist',
      name: 'WishListPage',
      component: () => import('../views/WishListPage.vue'),
    },
    {
      path: '/history',
      name: 'BrowsingHistoryPage',
      component: () => import('../views/BrowsingHistoryPage.vue'),
    },
    {
      path: '/seller-requirement',
      name: 'SellerRegisterPage',
      component: () => import('../views/SellerRegisterPage.vue'),
    },
    {
      path: '/productDetail/:id',
      name: 'ProductDetailPage',
      component: () => import('../views/ProductDetailView/ProductDetailPage.vue'),
    },
  ],
})

// Add navigation guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/auth/login') // Redirect to login if not authenticated
  } else {
    next() // Allow navigation
  }
})

export default router
