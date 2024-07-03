import * as Yup from 'yup'

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export const SIGN_IN_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required('Email is mandatory.')
    .matches(emailRegex, 'Please enter a valid email.'),
  password: Yup.string()
    .trim()
    .label('Password')
    .required('Password is mandatory.')
    .min(6, 'Try password atleast 6 character long.')
    .max(25, 'Try a password atmost 25 character long.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match.'
  )
})
