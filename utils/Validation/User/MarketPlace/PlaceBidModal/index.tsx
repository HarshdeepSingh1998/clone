import * as Yup from 'yup'

export const PLACE_BID_SCHEMA = Yup.object().shape({
  bidamount: Yup.string()
    .trim()
    .max(7, 'Bid amount must not exceed 7 characters.')
    .required('Bid amount is mandatory.')
})
