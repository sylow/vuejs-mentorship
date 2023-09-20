<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore()

</script>

<template>
  <section class="section">
    {{  authStore.auth }}
    <header>
      <div class="tabs">
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li v-show="authStore.authorized"><RouterLink to="/upload">Upload</RouterLink></li>
          <li v-show="authStore.authorized"><a @click="authStore.signout">Logout</a></li>
          <li v-show="!authStore.authorized"><RouterLink to="/login">Login</RouterLink></li>
          <li v-show="!authStore.authorized"><RouterLink to="/register">Register</RouterLink></li>
        </ul>
      </div>
    </header>
  <br/>

  <RouterView />
</section>
</template>

<style scoped>
</style>
