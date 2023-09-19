<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { type LoginForm } from '@/components/LoginForm'
  import { login } from '@/services/user.service'
  import { Form, Field, ErrorMessage } from 'vee-validate';
  import { useAuthStore } from '@/stores/auth'

  const form = reactive<LoginForm>({username:'gokhan', password:'1'})
  const result  = ref({})
  const authStore = useAuthStore()

  const onSubmit = async () => {
    authStore.signin(form)
  }

</script>

<template>
  <h1 class="title is-1">Login</h1>
  <Form @submit="onSubmit">
    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <Field type="text" name="username" role="username" class="input" v-model="form.username" :rules="validateEmail"/>
        <ErrorMessage name="username" />
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <Field type="text" name="password" role="password" class="input" v-model="form.password" />
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Login</button>
      </div>
    </div>
  </Form>
</template>