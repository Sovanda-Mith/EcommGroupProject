import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //===============================================>> Auth
    { 
      path: '/', redirect: '/auth/login' // Default route redirects to login
    }, 
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
      path: '/computers',
      name: 'LandingPage',
      component: () => import('../views/LandingPage.vue'),
    },
    
  ],
})

export default router
