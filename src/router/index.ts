import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ImageUploadView from '../views/ImageUploadView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {authRequired: true}
  },
  {
    path: '/upload',
    name: 'upload',
    component: ImageUploadView,
    meta: {authRequired: true}
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {authRequired: false}
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {authRequired: false}
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

  if (!authStore.auth.token && to.meta.authRequired){
    return { name: 'login'}
  }
  if (!!authStore.auth.token && !to.meta.authRequired){
    return
  }
})

export default router
