<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section class="section">
    <header>
      <div class="tabs">
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/">Login</RouterLink></li>
          <li><RouterLink to="/register">Register</RouterLink></li>
        </ul>
      </div>
    </header>
  <br/>

  <RouterView />
</section>
</template>

<style scoped>
</style>
