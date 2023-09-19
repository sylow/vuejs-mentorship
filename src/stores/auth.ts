import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

import { defineStore } from 'pinia'
import { login } from '@/services/user.service'
import { type LoginForm } from '@/components/LoginForm'
type AuthType = { username: string, token: string, exp: string }
const AuthInit = {username:'', token: '', exp: ''}

export const useAuthStore = defineStore('auth', () => {
  const auth = reactive(<AuthType>{username:'', token: '', exp: ''})
  const router = useRouter()
  
  const signin = async (form:LoginForm) => {
    const { success, data, error } = await login(form)
    Object.assign(auth, data);
    router.push('/')
  }

  const signout = async () => {
    Object.assign(auth, {username:'', token: '', exp: ''})
    router.push('/login')
  }
  const authorized = computed(()=> {
    return auth.token != ''
  })

  return { auth, signin, signout, authorized }
})
