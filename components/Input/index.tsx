import { ChangeEvent, useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { InputProps } from 'components/Input/types'
import {
  InputContent,
  InputText,
  StyledInput,
  ErrorMessageContainer
} from '@/styles/Components/Input'

const Input = ({
  title,
  controllername,
  defaultValue,
  className,
  type,
  placeholder,
  name,
  maxwidth,
  border,
  value,
  onChange,
  maxLength,
  disabled,
  min,
  max,
  step,
  onBlur,
  autocomplete,
  errors,
  control
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onChange?.(e.target.value)
  }

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
            type={type}
            placeholder={placeholder}
            name={name}
            maxwidth={maxwidth}
            border={border}
            value={
              inputValue as string | number | readonly string[] | undefined
            }
            onChange={handleChange}
            maxLength={maxLength}
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            onBlur={onBlur}
            autoComplete={autocomplete ? autocomplete : ''}
          />
        )}
      />
      <ErrorMessageContainer>
        {errors[controllername] ? (
          <span>{errors[controllername].message}</span>
        ) : (
          <span></span>
        )}
      </ErrorMessageContainer>
    </InputContent>
  )
}

export default Input
