import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
import Notifications from '@kyvg/vue3-notification'

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})



createApp(App)
  .use(pinia)
  .use(Notifications)
  .use(router)
  .mount('#app')