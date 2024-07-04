import * as Yup from 'yup'

export const CHANGE_PASSWORD_VALIDATION_SCHEMA = Yup.object().shape({
  password: Yup.string()
    .trim()
    .label('Password')
    .notOneOf(
      [Yup.ref('oldPassword')],
      [Yup.ref('password')].length === 0
        ? 'Password is mandatory.'
        : 'New password must be different from old password'
    )
    .required('Password is mandatory.')
    .min(6, 'Try password atleast 6 character long.')
    .max(25, 'Try a password atmost 25 character long.'),
  confirmPassword: Yup.string()
    .required('Password is mandatory.')
    .oneOf([Yup.ref('password')], 'Passwords must match.'),
  oldPassword: Yup.string().trim().label('Password')
})

export const EDIT_PROFILE_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().trim(),
  email: Yup.string().trim(),
  description: Yup.string().trim(),
  phonenumber: Yup.string()
    .trim()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .transform((value, originalValue) =>
      originalValue.trim() === '' ? undefined : value
    ),
  username: Yup.string().trim()
})
