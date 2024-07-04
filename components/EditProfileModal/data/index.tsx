import { UserState } from '@/store/userSlice'
import { FormDataType } from '@/utils/User/MarketPlaceContent/EditProfileModal/Form/types'

export const updatedFormData = (
  userData: UserState,
  formData: FormDataType[]
) => {
  return formData.map(field => {
    if (field.controllername === 'displayname') {
      return {
        ...field,
        value: userData?.data?.personalData?.username || '',
        disabled: !!userData?.data?.personalData?.username,
        defaultValue: userData?.data?.personalData?.username || ''
      }
    } else if (field.controllername === 'name') {
      return {
        ...field,
        defaultValue: userData?.data?.personalData?.name || '',
        value: userData?.data?.personalData?.name
      }
    } else if (field.controllername === 'useremail') {
      return {
        ...field,
        value: userData?.data?.email || 'info@basicmining.com',
        disabled: true,
        defaultValue: userData?.data?.email || 'info@basicmining.com'
      }
    } else {
      return {
        ...field,
        defaultValue: userData?.data?.personalData?.phone || '',
        value: userData?.data?.personalData?.phone
      }
    }
  })
}
