export type RegisterForm = {
    username: string,
    first_name: string,
    last_name: string,
    password: string,
    password_confirmation: string,
    email: string
}

export const validateEmail = (value: string) => {
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

export const required = (value: string) => {
    if (!value || !value.length) {
        return 'This field is required';
    }
    return true;
}

export const checked = (value: boolean) => {
    if (!value || value != true)
        return 'This field needs to be checked'

    return true
}