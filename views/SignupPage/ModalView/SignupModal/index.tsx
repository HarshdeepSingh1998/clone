import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formData } from '@/utils/SignupPageContent/Form'
import { useSignupForm } from '@/utils/Customhooks/useSignupForm'
import useSignupSubmit from '@/utils/Callback/SignupPage'
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
} from '@/styles/Views/SignupPage/Modal/SignupModal'

const SignupModal = () => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(true)
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', ''])
  const [disable, setDisable] = useState(false)
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])
  const {
    handleSubmit,
    control,
    getValues,
    watch,
    formState: { errors }
  } = useSignupForm()
  const { onSubmit } = useSignupSubmit(
    isSignUpVisible,
    otp,
    setOtp,
    setIsSignUpVisible,
    setDisable,
    getValues
  )

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
          isSignUpVisible={isSignUpVisible}
          otp={otp}
          inputsRef={inputsRef}
          setOtp={setOtp}
        />
        {isSignUpVisible && (
          <SigninContainer>
            <TextContainer>
              Already have an account? &nbsp;
              <span onClick={() => (window.location.href = '/signin')}>
                Sign in
              </span>
            </TextContainer>
          </SigninContainer>
        )}
      </ModalContent>
    </ModalContainer>
  )
}

export default SignupModal
