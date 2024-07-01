import { useState } from 'react'
import { toast } from 'react-toastify'
import Image from 'next/image'
import usePost from '@/hooks/usePost'
import { useContactForm } from '@/utils/Customhooks/useContactForm'
import { formData } from '@/utils/ContactPageContent/Form'
import Form from 'components/Form'
import FanAnimation from '@/components/FanAnimation'
import GetInTouch from 'views/ContactPage/FormView/GetInTouch'
import Contact from 'assets/images/images/contact.png'
import {
  FormContainer,
  UpperFanContainer,
  FormContent,
  TitleContainer,
  ContactFormContainer,
  LowerFanContainer
} from '@/styles/Views/ContactPage/Form'

const FormView = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useContactForm()
  const [disable, setDisable] = useState<boolean>(false)
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
        reset()
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

  return (
    <FormContainer>
      <UpperFanContainer>
        <FanAnimation />
      </UpperFanContainer>
      <FormContent>
        <TitleContainer>
          Get In <span>Touch</span>
          <Image src={Contact} alt={'Contact'} />
        </TitleContainer>
        <ContactFormContainer>
          <Form
            handleSubmit={handleSubmit}
            formData={formData}
            control={control}
            errors={errors}
            onSubmit={onSubmit}
            disable={disable}
          />
          <GetInTouch />
        </ContactFormContainer>
      </FormContent>
      <LowerFanContainer>
        <FanAnimation />
      </LowerFanContainer>
    </FormContainer>
  )
}

export default FormView
