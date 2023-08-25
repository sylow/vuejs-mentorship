<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { type LoginForm } from '@/components/LoginForm'
  import { login } from '@/services/user.service'

  const form = reactive<LoginForm>({username:'', password:''})

  const onSubmit=() => {
    login(form)
    console.log('Clicked on submit')
  }
</script>
<template>
  <h1>Login</h1>
  <form @submit.prevent="onSubmit">
    username: <input type="text" name="username" role="email" v-model="form.username">
    Password: <input type="password" name="password" role="password" v-model="form.password">
    <button type="submit">Login</button>
  </form>
</template>