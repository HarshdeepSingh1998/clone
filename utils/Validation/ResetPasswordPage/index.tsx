import * as Yup from 'yup'

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export const RESET_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required('Email is mandatory.')
    .matches(emailRegex, 'Please enter a valid email.')
})
