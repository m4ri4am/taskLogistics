import { createRouter, createWebHistory } from 'vue-router'
import type { Router } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
  ]
})

export default router
