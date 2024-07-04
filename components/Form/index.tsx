import CircularProgress from '@mui/material/CircularProgress'
import { FormType } from 'components/Form/types'
import Button from '@/components/Button'
import Textbox from '@/components/Textbox'
import Input from '@/components/Input'
import OtpModal from '@/views/SignupPage/ModalView/OtpModal'
import {
  FormContainer,
  InputContainer,
  ButtonContainer
} from '@/styles/Components/Form'

const Form = ({
  handleSubmit,
  formData,
  control,
  errors,
  onSubmit,
  disable,
  isTextboxVisible,
  buttonText,
  watch,
  isSignUpVisible,
  otp,
  inputsRef,
  setOtp,
  svgPosition
}: FormType) => {
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputContainer svgPosition={svgPosition}>
        <>
          {isSignUpVisible &&
            formData.map((data, i) => (
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
                startImage={data.startImage}
                endImage={data.endImage}
                watch={watch}
                value={data.value}
                disabled={data.disabled}
              />
            ))}
          {isTextboxVisible && (
            <Textbox
              title={'Leave A Message'}
              controllername={'message'}
              control={control}
              defaultValue={''}
              placeholder={'How can we help'}
              maxLength={600}
              errors={errors}
            />
          )}
          {!isSignUpVisible && (
            <OtpModal otp={otp} inputsRef={inputsRef} setOtp={setOtp} />
          )}
        </>
      </InputContainer>
      <ButtonContainer
        disable={
          isSignUpVisible
            ? formData.some(data => watch(data.controllername) === '')
            : otp?.some(digit => digit === '')
        }
      >
        <Button
          type="submit"
          variant="contained"
          disable={disable}
          label={disable ? <CircularProgress /> : buttonText || 'Send Message'}
        />
      </ButtonContainer>
    </FormContainer>
  )
}

export default Form
