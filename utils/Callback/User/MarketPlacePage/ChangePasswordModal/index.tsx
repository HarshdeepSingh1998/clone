/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'
import usePost from '@/hooks/usePost'

interface ErrorResponse {
  response: {
    data: {
      message: string
    }
  }
}

const useSubmitForm = (
  reset: any,
  showModal: (value: boolean) => void,
  setMenuModalOpen: Dispatch<SetStateAction<boolean>>
) => {
  const [disable, setDisable] = useState(false)
  const { mutateAsync } = usePost()

  const onSubmit = async (values: { password: string }): Promise<void> => {
    setDisable(true)

    try {
      const response = await mutateAsync({
        url: '/api/changePassword',
        payload: { password: values.password }
      })
      if (response.status === 200) {
        toast.success(`${response?.data?.message}`)
        showModal(false)
        setDisable(false)
        setMenuModalOpen(false)
      }
    } catch (error) {
      const axiosError = error as ErrorResponse
      const errorMessage = axiosError?.response?.data?.message
      if (errorMessage) {
        toast.error(errorMessage)
      } else {
        toast.error('Oops! Something went wrong. Please try again later')
      }

      setDisable(false)
      reset('')
    }
  }

  return { onSubmit, disable }
}

export default useSubmitForm
