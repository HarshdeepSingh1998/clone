import { useState } from 'react'
import { toast } from 'react-toastify'
import usePost from '@/hooks/usePost'

const useSubmitForm = (reset: any) => {
  const [disable, setDisable] = useState(false)
  const { mutateAsync } = usePost()

  const onSubmit = async (values: any): Promise<void> => {
    setDisable(true)
    const payload = { ...values, email: values.email.toLowerCase() }

    try {
      const response = await mutateAsync({
        url: '/api/contactUs',
        payload: payload
      })

      if (response?.data.status === 200) {
        reset({ name: '', email: '', company: '', subject: '', message: '' })
        toast.success(`${response?.data?.message}`)
        setDisable(false)
      }
    } catch (error: any) {
      const messages = error?.response?.data?.message
      if (typeof messages === 'object' && messages !== null) {
        for (const key in messages) {
          if (Object.prototype.hasOwnProperty.call(messages, key)) {
            toast.error(`${key} error : ${messages[key]?.message}`)
          }
        }
      } else {
        toast.error('An error occurred.')
      }

      setDisable(false)
    }
  }

  return { onSubmit, disable }
}

export default useSubmitForm
