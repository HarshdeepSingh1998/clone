/* eslint-disable no-console */
import { useState } from 'react'
import { toast } from 'react-toastify'
import usePost from 'hooks/usePost'
import { MemberDataInterface } from '@/views/Admin/MembersPage/Desktop/types'
type FormFields = 'name' | 'email' | 'phone' | 'username'
const useSubmit = (
  memberData: MemberDataInterface,
  reset: any,
  setError: any
) => {
  const { mutateAsync } = usePost()
  const [, setDisable] = useState(false)
  const onSubmit = async (values: any) => {
    setDisable(true)
    try {
      const response = await mutateAsync({
        url: '/api/addMember',
        payload: {
          ...values,
          name: values.name.trim(),
          username: values.username.trim()
        }
      })
      if (response?.data.status === 200) {
        // fetchUsersData()
        toast.success(`${response?.data?.message}`)
        memberData.closeAddProductModal()
        reset()
        setDisable(false)
        memberData.setPage(1)
        memberData.setForceUpdate(prev => !prev)
      }
    } catch (error: any) {
      setDisable(false)

      const messages = error?.response?.data?.message
      if (typeof messages === 'object' && messages !== null) {
        for (const key in messages) {
          if (Object.prototype.hasOwnProperty.call(messages, key)) {
            setError(key as FormFields, {
              type: 'manual',
              message: `${messages[key]?.message}`
            })
            // toast.error(`${key} error : ${messages[key]?.message}`)
          }
        }
      } else {
        toast.error(messages)
      }
    }
  }

  return { onSubmit }
}

export default useSubmit
