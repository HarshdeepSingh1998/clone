import { ChangeEvent, useState } from 'react'
import { Controller } from 'react-hook-form'
import { InputProps } from 'components/Input/types'
import ShowEye from '@/assets/images/svg/ShowEye'
import {
  InputContent,
  InputText,
  StyledInput,
  ErrorMessageContainer,
  EndImageContainer,
  PasswordImageContainer
} from '@/styles/Components/Input'
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const Input = ({
  title,
  controllername,
  defaultValue,
  className,
  type,
  placeholder,
  maxwidth,
  border,
  onChange,
  maxLength,
  disabled,
  min,
  max,
  step,
  onBlur,
  autocomplete,
  errors,
  control,
  startImage,
  endImage,
  watch
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleToggleShowPassword = () => {
    setShowPassword(prev => !prev)
  }
  const isPasswordField =
    controllername === 'password' || controllername === 'confirmPassword'

  return (
    <InputContent>
      <InputText>{title}</InputText>
      <Controller
        name={controllername}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <StyledInput
            {...field}
            className={className}
            type={isPasswordField ? (showPassword ? 'text' : 'password') : type}
            placeholder={placeholder}
            name={controllername}
            maxwidth={maxwidth}
            border={border}
            value={field.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              field.onChange(e)
              onChange?.(e.target.value)
            }}
            maxLength={maxLength}
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            onBlur={onBlur}
            autoComplete={autocomplete ? autocomplete : ''}
            startImage={startImage}
          />
        )}
      />
      <ErrorMessageContainer className="error-message">
        {errors[controllername] && (
          <span>{errors[controllername].message}</span>
        )}
      </ErrorMessageContainer>
      {controllername === 'email' && emailRegex.test(watch(controllername)) && (
        <EndImageContainer>{endImage && endImage()}</EndImageContainer>
      )}
      {isPasswordField && endImage && (
        <PasswordImageContainer>
          <label>
            <span onClick={handleToggleShowPassword}>
              {showPassword ? <ShowEye /> : endImage()}
            </span>
          </label>
        </PasswordImageContainer>
      )}
      {startImage && startImage()}
    </InputContent>
  )
}

export default Input
