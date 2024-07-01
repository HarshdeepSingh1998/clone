import Image from 'next/image'
import { useContactForm } from '@/utils/Customhooks/useContactForm'
import Input from '@/components/Input'
import FanAnimation from '@/components/FanAnimation'
import Contact from 'assets/images/images/contact.png'
import {
  FormContainer,
  UpperFanContainer,
  FormContent,
  TitleContainer,
  ContactFormContainer,
  Form,
  InputContainer
} from '@/styles/Views/ContactPage/Form'
import { formData } from '@/utils/ContactPageContent/Form'

const FormView = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useContactForm()

  const onSubmit = async (values: any) => {
    console.log(values)
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              {formData.map((data, i) => (
                <Input
                  key={i}
                  title={data.title}
                  controllername={data.controllername}
                  control={control}
                  defaultValue={data.defaultValue}
                  placeholder={data.placeholder}
                  type={data.type}
                  maxLength={data.maxLength}
                  maxwidth={data.maxwidth}
                  border={data.border}
                  errors={errors}
                />
              ))}
            </InputContainer>
          </Form>
        </ContactFormContainer>
      </FormContent>
    </FormContainer>
  )
}

export default FormView
