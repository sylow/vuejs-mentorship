<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { type RegisterForm } from '@/components/RegisterForm'
  import { register } from '@/services/user.service'

  const form = reactive<RegisterForm>({username:'', password:'', passwordConfirmation:'', firstName:'', lastName:'', email:'', agreeTermOfServices:false})

  const onSubmit=() => {
    register(form)
    console.log('Clicked on submit')
  }
</script>
<template>
  <h1>Register</h1>
  <form @submit.prevent="onSubmit">
    <p>Username: <input type="text" name="username" role="email" v-model="form.username"></p>
    <p>Password: <input type="password" name="password" role="password" v-model="form.password"></p>
    <p>Password Confirmation: <input type="passwordConfirmation" name="passwordConfirmation" role="passwordConfirmation" v-model="form.passwordConfirmation"></p>
    <p>Email: <input type="text" name="email" role="email" v-model="form.email"></p>
    <p>First Name: <input type="text" name="firstName" role="firstName" v-model="form.firstName"></p>
    <p>Last Name: <input type="text" name="lastName" role="lastName" v-model="form.lastName"></p>
    <p><input type="checkbox" name="agreeTermOfServices" role="agreeTermOfServices" v-model="form.agreeTermOfServices"> Do you agree Terms?</p>
    <button type="submit">Register</button>
  </form>
</template>