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
        data = d
        console.log(data)
      });
    })
    .catch((err) => {
      error = err
      console.log(err)
    });
    if (error != '')
      return { success: false, data: {}, error}
    else
      return { success: true, data}
  }

export const register=(form:RegisterForm):{success: Boolean, data: any, error?: string} =>  {
  let success
  let data
  let error;

  console.log(form)

  fetch('http://localhost:3001/v1/users', {
      method: "POST",
      body: JSON.stringify({"user": form}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => {
      response.json().then((d) => {
        data = d
      });
    })
    .catch((err) => {
      error = err
      console.log(err)
    });
    if (error != '')
      return { success: false, data: {}, error}
    else
      return { success: true, data}
}