import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CartPage',
      component: () => import('../views/CartPage.vue'),
    },
    {
      path: '/checkout',
      name: 'CheckoutPage',
      component: () => import('../views/checkOutPage.vue'),
    },

  ],
})

export default router
