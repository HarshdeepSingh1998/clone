import { ChangeEvent } from 'react'
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
  control
}: InputProps) => {
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
            name={controllername}
            maxwidth={maxwidth}
            border={border}
            value={field.value || ''}
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
