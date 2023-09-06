<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { type LoginForm } from '@/components/LoginForm'
  import { login } from '@/services/user.service'

  const form = reactive<LoginForm>({username:'gokhan', password:'1'})
  const result  = ref({})

  const onSubmit=() => {
    console.log(login(form))
    const result = login(form)
    console.log('Clicked on submit')
  }
</script>
<template>
  {{  result }}
  <h1 class="title is-1">Login</h1>
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

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Login</button>
      </div>
    </div>
  </form>
</template>