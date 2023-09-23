import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ImageUploadView from '../views/ImageUploadView.vue'
import RecordAdd from '../views/RecordAdd.vue'
import RecordList from '../views/RecordList.vue'

// ToDo - fill the routes with the enum
export enum Views {
  HOME = 'home',
  UPLOAD = 'upload',
  LOGIN = 'login',
  REGISTER = 'register',
  RECORD = 'record_add',
  RECORD_LIST = 'record_list',
}

const routes = [
  {
    path: '/',
    name: Views.HOME,
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
  },
  {
    path: '/record_add',
    name: 'record_add',
    component: RecordAdd,
    meta: {authRequired: false}
  },

  {
    path: '/record_list',
    name: 'record_list',
    component: RecordList,
    meta: {authRequired: true}
  },
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
