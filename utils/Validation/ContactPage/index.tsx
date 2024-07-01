import * as Yup from 'yup'
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export const CONTACT_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().trim().required('Name is mandatory.'),
  email: Yup.string()
    .trim()
    .required('Email is mandatory.')
    .matches(emailRegex, 'Please enter a valid email.'),
  subject: Yup.string().trim().required('Subject is mandatory.'),
  message: Yup.string().trim().required('Message is mandatory.')
})
