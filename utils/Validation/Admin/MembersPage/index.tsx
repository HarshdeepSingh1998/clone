import * as yup from 'yup'
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const phoneRegex = /^[0-9]*$/
export const ADD_MEMBER_SCHEMA = yup.object().shape({
  name: yup.string().nullable(),
  username: yup.string().nullable(),
  email: yup
    .string()
    .trim()
    .required('Email is mandatory.')
    .matches(emailRegex, 'Please enter a valid email.'),
  phone: yup
    .string()
    .nullable()
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? null : value
    )
    .matches(phoneRegex, 'Phone number can only contain numbers.')
})
