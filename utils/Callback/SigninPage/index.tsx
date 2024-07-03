/* eslint-disable no-console */
import { Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import usePost from 'hooks/usePost'
import { AppDispatch } from '@/store/store'
import { fetchUser } from '@/store/userSlice'
import usePut from '@/hooks/usePut'
import useFcmToken from '@/utils/Customhooks/useFcmToken'

const useSigninSubmit = (setDisable: Dispatch<SetStateAction<boolean>>) => {
  const { mutateAsync } = usePost()
  const { fcmToken } = useFcmToken()
  const { mutateAsync: callSaveFirebaseToken } = usePut()
  const dispatch: AppDispatch = useDispatch()
  const onSubmit = async (values: any) => {
    const lowercaseEmail = values.email.toLowerCase()
    const password = values.password
    setDisable(true)
    try {
      const response = await mutateAsync({
        url: '/api/login',
        payload: { email: lowercaseEmail, password: password }
      })
      if (response?.data.status === 200) {
        localStorage.setItem('token', response?.data?.data?.token)
        toast.success(`${response?.data?.message}`)
        dispatch(fetchUser())
        setDisable(false)

        const saveFirebaseTokenResponse = await callSaveFirebaseToken({
          url: `/api/saveFirebaseToken`,
          payload: { token: fcmToken }
        })

        if (saveFirebaseTokenResponse?.data.status === 200) {
          console.log('Token updated successfully.')
        }
      }
    } catch (error: any) {
      if (!error?.response?.data?.message) {
        toast.error(`Oops! Something went wrong. Please try again later`, {
          autoClose: 2000
        })
      } else {
        toast.error(error?.response?.data?.message, {
          autoClose: 2000
        })
      }

      setDisable(false)
    }
  }

  return { onSubmit }
}

export default useSigninSubmit
