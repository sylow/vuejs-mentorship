import { type LoginForm } from '@/components/LoginForm'
import { type RegisterForm } from '@/components/RegisterForm'

type UserAuth = {
  username: String,
  token: String,
  expires_at: String,
}

export const checkToken = async (access_token: string) => {
  return false
}

export const login = async (form: LoginForm): Promise<{ success: Boolean, data: any, error?: string }> => {
  let data

  let result = await fetch('http://localhost:3001/v1/sessions', {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  data = await result.json()

  if (result.ok)
    return { success: result.ok, data: data }
  else
    return { success: result.ok, data: data, error: data.error }
}

export const logout = async () => {
  let result = await fetch('http://localhost:3001/v1/sessions', {
    method: "DELETE",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return { success: true }
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