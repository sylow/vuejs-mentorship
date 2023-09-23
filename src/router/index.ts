import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home.vue'
import RegisterView from '@/views/sessions/register.vue'
import LoginView from '@/views/sessions/login.vue'
import RecordAdd from '@/views/records/new.vue'
import RecordList from '@/views/records/list.vue'

// ToDo - fill the routes with the enum
export enum Views {
  HOME = 'home',
  LOGIN = 'login',
  REGISTER = 'register',
  RECORD_NEW = 'record-new',
  RECORD_LIST = 'record-list',
}

const routes = [
  {
    path: '/',
    name: Views.HOME,
    component: HomeView,
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
    path: '/record/new',
    name: Views.RECORD_NEW,
    component: RecordAdd,
    meta: {authRequired: false}
  },

  {
    path: '/record/list',
    name: Views.RECORD_LIST,
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
