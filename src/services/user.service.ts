import { type LoginForm } from '@/components/LoginForm'
import { type RegisterForm } from '@/components/RegisterForm'
export const login=(form:LoginForm):{success: Boolean, data: any, error?: string} =>  {
  let success
  let data
  let error;
  console.log(form)

  fetch('http://localhost:3001/v1/sessions', {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => {
          response.json().then((d) => {
            return {success: true, data: d}
          });
        })
        .catch((err) => {
          return { success: false, data: {}, error: err}
        });
        return { success: false, data: {}}
  }

export const register=(form:RegisterForm):{success: Boolean, data: any, error?: string} =>  {

  console.log(form)
  return {success: true, data: {token: 'hnehnehtsrn', user: {username: 'gokhan', age: 50}}}
}
//export const register=(form:Registration)