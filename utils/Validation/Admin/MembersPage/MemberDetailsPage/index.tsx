import * as yup from 'yup'

export const USE_COUNTER_BID_SCHEMA = yup.object().shape({
  counterprice: yup
    .string()
    .matches(/^[0-9]*$/, 'Counter price must be a number between 0-9.')
    .max(7, 'Bid amount must not exceed 7 characters.')
    .required('Counter price is mandatory.')
})
