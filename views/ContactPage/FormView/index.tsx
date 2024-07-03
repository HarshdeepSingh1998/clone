import Image from 'next/image'
import { useContactForm } from '@/utils/Customhooks/useContactForm'
import { formData } from '@/utils/ContactPageContent/Form'
import useSubmitForm from '@/utils/Callback/ContactPage'
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
    control,
    reset,
    watch,
    formState: { errors }
  } = useContactForm()
  const { onSubmit, disable } = useSubmitForm(reset)
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
            isTextboxVisible={true}
            buttonText=""
            watch={watch}
            isSignUpVisible={true}
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
