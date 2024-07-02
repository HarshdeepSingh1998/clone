import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@/components/Button'
import {
  OtpContainer,
  ButtonContainer,
  OtpContent
} from '@/styles/Views/SignupPage/Modal/OtpModal'

interface OtpModalInterface {
  otp: string[]
  inputsRef: MutableRefObject<(HTMLInputElement | null)[]>
  setOtp: Dispatch<SetStateAction<string[]>>
  disable: boolean
}

const OtpModal = ({ otp, inputsRef, setOtp, disable }: OtpModalInterface) => {
  const handleOtpChange = (
    index: number,
    value: string,
    isBackspace: boolean,
    inputsRef: React.MutableRefObject<(HTMLInputElement | null)[]>
  ): void => {
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (!isBackspace && index < otp.length - 1 && value !== '') {
      inputsRef.current[index + 1]?.focus()
    }

    if (isBackspace && index > 0 && value === '') {
      inputsRef.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>): void => {
    e.preventDefault()
    const pastedText = e.clipboardData.getData('text')
    const newOtp = Array.from(pastedText.slice(0, otp.length)) as string[]
    if (newOtp.length > 0 && otp[0] === '') {
      newOtp[0] = pastedText[0]
    }

    setOtp(newOtp)
    inputsRef.current[otp.length - 1]?.focus()
  }

  return (
    <OtpContainer>
      <OtpContent>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={el => (inputsRef.current[index] = el)}
            type="text"
            maxLength={1}
            value={digit}
            onChange={e => {
              handleOtpChange(index, e.target.value, false, inputsRef)
            }}
            onKeyDown={e => {
              if (e.key === 'Backspace') {
                e.preventDefault()
                handleOtpChange(index, '', true, inputsRef)
              }
            }}
            onPaste={handlePaste}
          />
        ))}
      </OtpContent>
      <ButtonContainer>
        <Button
          type="submit"
          variant="contained"
          // disable={disable || !isOtpValid()}
          label={disable ? <CircularProgress /> : 'Continue'}
        />
      </ButtonContainer>
    </OtpContainer>
  )
}

export default OtpModal
