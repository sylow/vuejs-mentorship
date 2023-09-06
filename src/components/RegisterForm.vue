<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { type RegisterForm } from '@/components/RegisterForm'
  import { register } from '@/services/user.service'
  import { Form, Field, ErrorMessage } from 'vee-validate';

  const form = reactive<RegisterForm>({username:'', password:'', password_confirmation:'', first_name:'', last_name:'', email:''})
  const agreeTermOfServices = ref(false)
  const onSubmit=() => {
    register(form)
    console.log('Clicked on submit')
  }

  const validateEmail = (value:string) => {
    // if the field is empty
    if (!value) {
      return 'This field is required';
    }
    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
      return 'This field must be a valid email';
    }
    // All is good
    return true;
  }

  const required = (value:string) => {
    if (!value || !value.length) {
      return 'This field is required';
    }
    return true;
  }

  const checked = (value:boolean) => {
    if (!value || value != true)
      return 'This field needs to be checked'

    return true
  }

</script>
<template>
  <h1 class="title is-1">Register</h1>
  <Form @submit="onSubmit">
    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <Field type="text" name="username" role="username" class="input" v-model="form.username" :rules="required"/>
        <ErrorMessage name="username"/>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <Field type="text" name="password" role="password" class="input" v-model="form.password" :rules="required"/>
        <ErrorMessage name="password"/>
      </div>
    </div>

    <div class="field">
      <label class="label">Password Confirmation</label>
      <div class="control">
        <Field type="text" name="password_confirmation" role="password" class="input" v-model="form.password_confirmation" :rules="required"/>
        <ErrorMessage name="password_confirmation"/>
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <Field type="text" name="email" role="email" class="input" v-model="form.email" :rules="required"/>
        <ErrorMessage name="email"/>
      </div>
    </div>

    <div class="field">
      <label class="label">First Name</label>
      <div class="control">
        <Field type="text" name="first_name" role="first_name" class="input" v-model="form.first_name" :rules="required"/>
        <ErrorMessage name="first_name"/>
      </div>
    </div>

    <div class="field">
      <label class="label">Last Name</label>
      <div class="control">
        <Field type="text" name="last_name" role="last_name" class="input" v-model="form.last_name" :rules="required"/>
        <ErrorMessage name="last_name"/>
      </div>
    </div>

    <div class="field">
      <div class="control">    
        <label class="checkbox">
          <Field type="checkbox" name="agreeTermOfServices" role="agreeTermOfServices" v-model="agreeTermOfServices"/>
          I agree to the <a href="#">terms and conditions</a>
        </label>    
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Register</button>
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