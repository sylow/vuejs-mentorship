import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const http = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${authStore.token}`
  },
});

export default http