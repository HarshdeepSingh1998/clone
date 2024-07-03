import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formData } from '@/utils/SigninPageContent/Form'
import { useSigninForm } from '@/utils/Customhooks/useSigninForm'
import useSigninSubmit from '@/utils/Callback/SigninPage'
import Form from 'components/Form'
import ProjectLogo from 'assets/images/images/project-logo.png'
import {
  ModalContainer,
  LogoContainer,
  ModalContent,
  HeaderContainer,
  SubheaderContainer,
  SigninContainer,
  TextContainer
} from '@/styles/Views/SigninPage/Modal/SigninModal'

const SigninModal = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useSigninForm()
  const [disable, setDisable] = useState(false)
  const { onSubmit } = useSigninSubmit(setDisable)
  return (
    <ModalContainer>
      <LogoContainer>
        <Link href="/">
          <Image src={ProjectLogo} alt="Asic mining" />
        </Link>
      </LogoContainer>
      <ModalContent>
        <HeaderContainer>{`Sign in`}</HeaderContainer>
        <SubheaderContainer>{`Continue with email address`}</SubheaderContainer>
        <Form
          handleSubmit={handleSubmit}
          formData={formData}
          control={control}
          errors={errors}
          buttonText="Continue"
          isTextboxVisible={false}
          watch={watch}
          onSubmit={onSubmit}
          disable={disable}
          isSignUpVisible={true}
        />
        <SigninContainer>
          <TextContainer>
            Don&apos;t have an account? &nbsp;
            <span onClick={() => (window.location.href = '/signup')}>
              Sign up
            </span>
          </TextContainer>
          <span>Forgot Password?</span>
        </SigninContainer>
      </ModalContent>
    </ModalContainer>
  )
}

export default SigninModal
