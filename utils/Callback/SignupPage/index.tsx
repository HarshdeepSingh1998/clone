import { Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import usePost from 'hooks/usePost'
import { AppDispatch } from '@/store/store'
import { fetchUser } from '@/store/userSlice'

const useSignupSubmit = (
  isSignUpVisible: boolean,
  otp: string[],
  setOtp: Dispatch<SetStateAction<string[]>>,
  setIsSignUpVisible: Dispatch<SetStateAction<boolean>>,
  setDisable: Dispatch<SetStateAction<boolean>>,
  getValues: any
) => {
  const { mutateAsync } = usePost()
  const dispatch: AppDispatch = useDispatch()
  const onSubmit = async (values: any) => {
    const lowercaseEmail = values.email.toLowerCase()
    const password = values.password

    if (isSignUpVisible) {
      try {
        const response = await mutateAsync({
          url: '/api/generateOtpAndSend',
          payload: { email: lowercaseEmail, password: password }
        })
        if (response?.data.status === 200) {
          setIsSignUpVisible(false)
          toast.success(`${response?.data?.message}`)
          setDisable(false)
        }
      } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`)
        setDisable(false)
      }
    } else {
      const values = getValues()
      const userEmail = values?.email
      try {
        const response = await mutateAsync({
          url: '/api/verifyOtpAndRegister',
          payload: {
            email: userEmail,
            otp: otp.join('')
          }
        })
        if (response?.data.status === 200) {
          localStorage.setItem('token', response?.data?.data?.token)
          toast.success(`${response?.data?.message}`)
          dispatch(fetchUser())
          setDisable(false)
        }
      } catch (error: any) {
        if (!error?.response?.data?.message) {
          toast.error(`Oops! Something went wrong. Please try again later`)
        } else {
          toast.error(`${error?.response?.data?.message}`)
        }

        setDisable(false)
        setOtp(['', '', '', '', '', ''])
      }
    }
  }

  return { onSubmit }
}

export default useSignupSubmit
