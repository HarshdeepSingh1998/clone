import * as Yup from 'yup'

export const ADD_PRODUCT_VALIDATION_SCHEMA: Yup.ObjectSchema<{
  modelName: string
  manufacturer: string
  serialNumber: string
  availability: string
  description: string
  efficiency: number | null
  power: number | null
  cooling: string
  hashRate: number | null
  productStatus: string
}> = Yup.object().shape({
  modelName: Yup.string()
    .trim()
    .required('Model Name is required.')
    .min(3, 'Min 3 characters are allowed')
    .max(30, 'Max 30 characters are allowed'),
  manufacturer: Yup.string().trim().required('Manufacturer Name is required.'),
  serialNumber: Yup.string()
    .trim()
    .required('Serial Number is required.')
    .matches(
      /^[a-zA-Z0-9]+$/,
      'Serial Number should not have special characters'
    )
    .min(3, 'Min 3 characters are allowed')
    .max(35, 'Max 35 characters are allowed'),
  availability: Yup.string().trim().required('Availability is required.'),
  description: Yup.string().trim().required('Description is required.'),
  efficiency: Yup.number()
    .transform((originalValue, originalObject) => {
      return originalObject === '' ? null : originalValue
    })
    .required('Efficiency is required.')
    .positive('Efficiency must be a positive number')
    .test(
      'maxDecimalPlaces',
      'Efficiency must have at most two decimal places',
      value => {
        if (value === undefined || value === null) return true
        const [, decimalPart] = String(value).split('.')
        return !decimalPart || decimalPart.length <= 2
      }
    )
    .test(
      'maxCharacters',
      'Efficiency must be less than or equal to 5 characters',
      value => {
        if (value === undefined || value === null) return true
        return String(value).replace('.', '').length <= 5
      }
    ),
  power: Yup.number()
    .transform((originalValue, originalObject) => {
      return originalObject === '' ? null : originalValue
    })
    .required('Power is required.')
    .positive('Power must be a positive number')
    .test(
      'maxDecimalPlaces',
      'Power must have at most two decimal places',
      value => {
        if (value === undefined || value === null) return true
        const [, decimalPart] = String(value).split('.')
        return !decimalPart || decimalPart.length <= 2
      }
    )
    .test(
      'maxCharacters',
      'Efficiency must be less than or equal to 5 characters',
      value => {
        if (value === undefined || value === null) return true
        return String(value).replace('.', '').length <= 5
      }
    ),
  cooling: Yup.string().trim().required('Cooling is required.'),
  hashRate: Yup.number()
    .transform((originalValue, originalObject) => {
      // Convert empty string to null to make it nullable
      return originalObject === '' ? null : originalValue
    })
    .required('Hashrate is required.')
    .positive('Hash rate must be a positive number')
    .test(
      'maxDecimalPlaces',
      'hashRate must have at most two decimal places',
      value => {
        if (value === undefined || value === null) return true
        const [, decimalPart] = String(value).split('.')
        return !decimalPart || decimalPart.length <= 2
      }
    )
    .test(
      'maxCharacters',
      'Efficiency must be less than or equal to 5 characters',
      value => {
        if (value === undefined || value === null) return true
        return String(value).replace('.', '').length <= 5
      }
    ),
  productStatus: Yup.string().trim().required('Product Status is required.')
})
