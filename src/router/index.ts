import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {auth: true}
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {auth: false}
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {auth: false}
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

import { useAuthStore } from '@/stores/auth'
// navigation guards
router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()

  if (!authStore.auth.token && to.meta.auth){
    return { name: 'login'}
  }
  if (!!authStore.auth.token && !to.meta.auth){
    return { name: '/'}
  }
  console.log('to: ', to)
  console.log('from', from)
})

export default router
