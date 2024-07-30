import * as yup from 'yup'

// Custom validation functions
const isValidDate = (date: string) => {
  return !isNaN(Date.parse(date))
}

// Define the validation schema
export const USER_PUBLISH_VALIDATION_SCHEMA = yup.object().shape({})
