<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { type RegisterForm } from '@/components/RegisterForm'
  import { register } from '@/services/user.service'

  const form = reactive<RegisterForm>({username:'', password:'', password_confirmation:'', first_name:'', last_name:'', email:''})
  const agreeTermOfServices = ref(false)
  const onSubmit=() => {
    register(form)
    console.log('Clicked on submit')
  }
</script>
<template>
  <h1 class="title is-1">Register</h1>
  <form @submit.prevent="onSubmit">
    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <input type="text" name="username" role="username" class="input" v-model="form.username">
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input type="text" name="password" role="password" class="input" v-model="form.password">
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input type="text" name="password_confirmation" role="password" class="input" v-model="form.password_confirmation">
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input type="text" name="email" role="email" class="input" v-model="form.email">
      </div>
    </div>

    <div class="field">
      <label class="label">First Name</label>
      <div class="control">
        <input type="text" name="first_name" role="first_name" class="input" v-model="form.first_name">
      </div>
    </div>

    <div class="field">
      <label class="label">Last Name</label>
      <div class="control">
        <input type="text" name="last_name" role="last_name" class="input" v-model="form.last_name">
      </div>
    </div>

    <div class="field">
      <div class="control">    
        <label class="checkbox">
          <input type="checkbox" name="agreeTermOfServices" role="agreeTermOfServices" v-model="agreeTermOfServices">
          I agree to the <a href="#">terms and conditions</a>
        </label>    
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" :disabled="!agreeTermOfServices">Register</button>
      </div>
    </div>    
  </form>
</template>