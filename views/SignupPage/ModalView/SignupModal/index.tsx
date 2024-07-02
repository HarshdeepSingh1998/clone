import Link from 'next/link'
import Image from 'next/image'
import { useSignupForm } from '@/utils/Customhooks/useSignupForm'
import ProjectLogo from 'assets/images/images/project-logo.png'
import {
  ModalContainer,
  LogoContainer,
  ModalContent,
  HeaderContainer,
  SubheaderContainer
} from '@/styles/Views/SignupPage/Modal/SignupModal'
import { useState } from 'react'
import Form from 'components/Form'
import { formData } from '@/utils/SignupPageContent/Form'

const SignupModal = () => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(true)
  const {
    handleSubmit,
    control,
    getValues,
    watch,
    formState: { errors }
  } = useSignupForm()
  return (
    <ModalContainer>
      <LogoContainer>
        <Link href="/">
          <Image src={ProjectLogo} alt="Asic mining" />
        </Link>
      </LogoContainer>
      <ModalContent>
        <HeaderContainer>
          {isSignUpVisible ? `Sign up` : `Enter OTP`}
        </HeaderContainer>
        <SubheaderContainer>
          {isSignUpVisible
            ? `Continue with email address`
            : `Enter OTP sent to your registered email ID`}
        </SubheaderContainer>
        {/* <Form
          handleSubmit={handleSubmit}
          formData={formData}
          control={control}
          errors={errors}
          textboxVisible={false}
          buttonText="Continue"
          // onSubmit={onSubmit}
          // disable={disable}
        /> */}
      </ModalContent>
    </ModalContainer>
  )
}

export default SignupModal
