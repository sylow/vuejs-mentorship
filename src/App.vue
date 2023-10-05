<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth';
import { onMounted, onBeforeMount, ref } from 'vue'
import { checkToken}  from './services/user.service'
import { axios } from '@/libraries/axios'

// ToDo - use enum on links
import { Views } from './router'

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()
const pageIsReady = ref<boolean>(true)

onMounted(async () => {
  console.log('app.vue mounted')

  const localToken = localStorage.getItem('access_token')
  if (localToken && await checkToken(localToken)) {
    // persist to store
    router.push({ name: '' })
  } else {
    router.push({ name: '' })
  }

})

</script>

<template>
  <section class="section">
    <header>
      <div class="tabs">
        <ul>
          <li :class="{'is-active': route.name == Views.HOME}"><RouterLink :to="{ name: Views.HOME }">Home</RouterLink></li>
          <li :class="{'is-active': route.name == Views.RECORD_NEW}" v-show="authStore.authorized"><RouterLink :to="{name: Views.RECORD_NEW}">Record Add</RouterLink></li>
          <li :class="{'is-active': route.name == Views.RECORD_LIST}" v-show="authStore.authorized"><RouterLink :to="{name: Views.RECORD_LIST}">Record List</RouterLink></li>
          <li v-show="authStore.authorized"><a @click="authStore.signout">Logout</a></li>
          <li :class="{'is-active': route.name == Views.LOGIN}" v-show="!authStore.authorized"><RouterLink :to="{name: Views.LOGIN}">Login</RouterLink></li>
          <li :class="{'is-active': route.name == Views.REGISTER}" v-show="!authStore.authorized"><RouterLink :to="{name: Views.REGISTER}">Register</RouterLink></li>
        </ul>
      </div>
    </header>
  <br/>
  <notifications position='bottom right' />
  <RouterView v-if="pageIsReady" />
  <div v-else>Checking authentication...</div>

  <div class="box p-2 my-4">
    <div class="title is-6">Debug</div>
    {{  authStore.auth }}
  </div>
</section>
</template>

<style scoped>
</style>
