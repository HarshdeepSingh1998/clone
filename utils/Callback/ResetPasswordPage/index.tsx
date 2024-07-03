/* eslint-disable no-console */
import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import usePost from 'hooks/usePost'

const useResetSubmit = (
  setDisable: Dispatch<SetStateAction<boolean>>,
  setValue: any,
  setIsMailSent: Dispatch<SetStateAction<boolean>>
) => {
  const { mutateAsync } = usePost()

  const onSubmit = async (values: any) => {
    setDisable(true)
    try {
      const response = await mutateAsync({
        url: '/api/checkEmailAndSendPassword',
        payload: { email: values.email }
      })
      if (response.status === 200) {
        toast.success(`${response?.data?.message}`)
        setIsMailSent(true)
        setDisable(false)
      }
    } catch (error: any) {
      toast.error(`${error?.response?.data?.message}`)
      setDisable(false)
      setValue('email', '')
    }
  }

  return { onSubmit }
}

export default useResetSubmit
