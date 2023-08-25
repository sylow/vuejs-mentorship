import { type LoginForm } from '@/components/LoginForm'
export const login=(form:LoginForm):{success: Boolean, data: any, error?: string} =>  {

  console.log(form)
  return {success: true, data: {token: 'hnehnehtsrn', user: {username: 'gokhan', age: 50}}}
}

//export const register=(form:Registration)