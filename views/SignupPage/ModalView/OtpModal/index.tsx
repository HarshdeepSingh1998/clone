import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import {
  OtpContainer,
  OtpContent
} from '@/styles/Views/SignupPage/Modal/OtpModal'

interface OtpModalInterface {
  otp?: string[]
  inputsRef?: MutableRefObject<(HTMLInputElement | null)[]>
  setOtp?: Dispatch<SetStateAction<string[]>>
}

const OtpModal = ({ otp, inputsRef, setOtp }: OtpModalInterface) => {
  const handleOtpChange = (
    index: number,
    value: string,
    isBackspace: boolean,
    inputsRef: React.MutableRefObject<(HTMLInputElement | null)[]>
  ): void => {
    if (!otp || !setOtp || !inputsRef) return
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
    if (!otp || !setOtp || !inputsRef) return
    e.preventDefault()
    const pastedText = e.clipboardData.getData('text')
    const newOtp = Array.from(pastedText.slice(0, otp.length)) as string[]
    if (newOtp.length > 0 && otp[0] === '') {
      newOtp[0] = pastedText[0]
    }

    setOtp(newOtp)
    inputsRef.current[otp.length - 1]?.focus()
  }

  if (!otp || !inputsRef || !setOtp) {
    return null
  }

  return (
    <OtpContainer>
      <OtpContent>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={el => (inputsRef.current[index] = el)}
            type="number"
            maxLength={1}
            value={digit}
            onChange={e => {
              const value = e.target.value
              if (/^\d?$/.test(value)) {
                handleOtpChange(index, value, false, inputsRef)
              }
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
    </OtpContainer>
  )
}

export default OtpModal
