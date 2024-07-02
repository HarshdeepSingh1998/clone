import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formData } from '@/utils/SignupPageContent/Form'
import { useSignupForm } from '@/utils/Customhooks/useSignupForm'
import Form from 'components/Form'
import OtpModal from 'views/SignupPage/ModalView/OtpModal'
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
import useSignupSubmit from '@/utils/Callback/SignupPage'

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
  const isOtpValid = (): boolean => {
    return otp.every(digit => digit !== '')
  }

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
        {isSignUpVisible && (
          <>
            {' '}
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
              isOtpValid={isOtpValid}
            />
            <SigninContainer>
              <TextContainer>
                Already have an account? &nbsp;
                <span onClick={() => (window.location.href = '/signin')}>
                  Sign in
                </span>
              </TextContainer>
            </SigninContainer>
          </>
        )}
        {!isSignUpVisible && (
          <OtpModal
            otp={otp}
            inputsRef={inputsRef}
            setOtp={setOtp}
            disable={disable}
          />
        )}
      </ModalContent>
    </ModalContainer>
  )
}

export default SignupModal
