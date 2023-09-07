import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { login } from '@/services/user.service'
import { type LoginForm } from '@/components/LoginForm'
type AuthType = { username: string, token: string, exp: string }

export const useAuthStore = defineStore('auth', () => {
  let user = reactive(<AuthType>{username: '', token: '', exp: ''})

  const signin = async (form:LoginForm) => {
    user = await login(form)
    
  }
  return { user, signin }
})
