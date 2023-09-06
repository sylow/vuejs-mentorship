<script setup lang="ts">
import { ref, reactive } from 'vue'
import { type RegisterForm, required, checked, validateEmail } from '@/components/RegisterForm'
import { registerAsyncAwait } from '@/services/user.service'
import { Form, Field, ErrorMessage } from 'vee-validate';

const form = reactive<RegisterForm>({ username: '', password: '', password_confirmation: '', first_name: '', last_name: '', email: '' })
const initialFormErrors = reactive<Partial<RegisterForm>>({ // todo - Do NOT use ANY
  username: ''
})
const errorMessage = ref<String | null>(null)
const loading = ref<boolean>(false)

const agreeTermOfServices = ref(false)

const onSubmit = async () => {
  if (loading.value) return

  console.log('Clicked on submit')

  loading.value = true

  const { success, data, error } = await registerAsyncAwait(form)

  if (success) {
    // save credentials in pinia store
    // userStore.login({ data })
    console.log(data)

    // router.push({name: 'home'})
  } else {
    console.log(data, error)
    // initialFormErrors = data
    // errorMessage.value = error
  }

  loading.value = false
}

</script>
<template>
  <h1 class="title is-1">Register</h1>
  <Form @submit="onSubmit" :initial-errors="initialFormErrors">
    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <Field type="text" name="username" role="username" class="input" v-model="form.username" :rules="required" />
        <ErrorMessage name="username" />
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <Field type="text" name="password" role="password" class="input" v-model="form.password" :rules="required" />
        <ErrorMessage name="password" />
      </div>
    </div>

    <div class="field">
      <label class="label">Password Confirmation</label>
      <div class="control">
        <Field type="text" name="password_confirmation" role="password" class="input" v-model="form.password_confirmation"
          :rules="required" />
        <ErrorMessage name="password_confirmation" />
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <Field type="text" name="email" role="email" class="input" v-model="form.email" :rules="[required, validateEmail]" />
        <ErrorMessage name="email" />
      </div>
    </div>

    <div class="field">
      <label class="label">First Name</label>
      <div class="control">
        <Field type="text" name="first_name" role="first_name" class="input" v-model="form.first_name"
          :rules="required" />
        <ErrorMessage name="first_name" />
      </div>
    </div>

    <div class="field">
      <label class="label">Last Name</label>
      <div class="control">
        <Field type="text" name="last_name" role="last_name" class="input" v-model="form.last_name" :rules="required" />
        <ErrorMessage name="last_name" />
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <Field type="checkbox" name="agreeTermOfServices" role="agreeTermOfServices" v-model="agreeTermOfServices" :rules="checked" />
          I agree to the <a href="#">terms and conditions</a>
        </label>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button type="submit" class="button is-link" :disabled="loading">Register</button>
        <span class="error-message" v-if="errorMessage">{{ errorMessage }}</span>
      </div>
    </div>
  </Form>
</template>
<style scoped>
span[role=alert] {
  color: red;
  font-size: 13px;
}
</style>