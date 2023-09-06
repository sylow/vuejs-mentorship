import { type LoginForm } from '@/components/LoginForm'
import { type RegisterForm } from '@/components/RegisterForm'

type UserAuth = {
  token: String,
  expires_at: String,
}

export const login = (form: LoginForm): { success: Boolean, data: any, error?: string } => {
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
      // { detail: 'User and password don\'t match', data: {} }
    });
  if (error != '')
    return { success: false, data: {}, error }
  else
    return { success: true, data }
}

export const register = async (form: RegisterForm): Promise<{ success: Boolean, data: any, error?: string }> => {
  return new Promise((res) => {
    let success
    let data
    let error;

    fetch('http://localhost:3001/v1/users', {
      method: "POST",
      body: JSON.stringify({ "user": form }),
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
        // { data: {} as Partial<Form> }
      });
    if (error != '')
      res({ success: false, data: { email: 'email is already taken', password_confirmation: 'password does not match' } as Partial<RegisterForm>, error })
    else
      res({ success: true, data })
  })
}

export const registerAsyncAwait = async (form: RegisterForm): Promise<{ success: Boolean, data: Partial<RegisterForm> | UserAuth, error?: string }> => {

  let response
  try {
    response = await fetch('http://localhost:3001/v1/users')

    return { success: true, data: response.body }

  } catch (err) {
    return {success: false, data: response.body, error: err.message }
  }

  return {
    success: false,
    data: response.body ?? {},
    error: 'some err'
  }
}