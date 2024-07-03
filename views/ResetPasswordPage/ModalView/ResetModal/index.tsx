import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formData } from '@/utils/ResetPasswordPageContent/Form'
import useResetSubmit from '@/utils/Callback/ResetPasswordPage'
import { useResetForm } from '@/utils/Customhooks/useResetForm'
import Form from 'components/Form'
import Button from '@/components/Button'
import ProjectLogo from 'assets/images/images/project-logo.png'
import FanImage from 'assets/images/images/fan-image.png'
import {
  ModalContainer,
  LogoContainer,
  ModalContent,
  HeaderContainer,
  SubheaderContainer,
  MailSentContainer,
  TextContainer
} from '@/styles/Views/ResetPasswordPage/Modal/ResetModal'

const ResetModal = () => {
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors }
  } = useResetForm()
  const [disable, setDisable] = useState(false)
  const [isMailSent, setIsMailSent] = useState(false)
  const { onSubmit } = useResetSubmit(setDisable, setValue, setIsMailSent)

  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <ModalContainer>
      <LogoContainer>
        <Link href="/">
          <Image src={ProjectLogo} alt="Asic mining" />
        </Link>
      </LogoContainer>
      <ModalContent>
        {!isMailSent && (
          <>
            <HeaderContainer>{`Forgot Password?`}</HeaderContainer>
            <SubheaderContainer>{`Enter your registered email address`}</SubheaderContainer>

            <Form
              handleSubmit={handleSubmit}
              formData={formData}
              control={control}
              errors={errors}
              buttonText="Submit"
              isTextboxVisible={false}
              watch={watch}
              onSubmit={onSubmit}
              disable={disable}
              isSignUpVisible={true}
            />
          </>
        )}
        {isMailSent && (
          <MailSentContainer>
            <Image src={FanImage} alt="mail-sent" />
            <TextContainer>
              We have sent a temporary password to your email!
            </TextContainer>
            <Link href="/signin">
              <Button
                type="submit"
                variant="contained"
                label="Continue to signin"
              />
            </Link>
          </MailSentContainer>
        )}
      </ModalContent>
    </ModalContainer>
  )
}

export default ResetModal
