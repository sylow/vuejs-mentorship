import axios from 'axios'
import { useAuthStore } from '../stores/auth'

axios.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  config.headers.Authorization = `Bearer ${authStore.auth.token}`
  config.baseURL = 'http://localhost:3001'
  return config
}, (error) => {
  return Promise.reject(error)
})

export default axios