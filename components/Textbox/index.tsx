import { ChangeEvent, useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { TextBoxProps } from 'components/Textbox/types'
import {
  TextContainer,
  ErrorMessageContainer,
  TextBoxStyle
} from '@/styles/Components/Textbox'

const TextBox = ({
  title,
  controllername,
  control,
  defaultValue,
  placeholder,
  onChange,
  value,
  maxLength,
  errors
}: TextBoxProps) => {
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
    onChange?.(e.target.value)
  }

  return (
    <>
      <TextContainer>{title}</TextContainer>
      <Controller
        name={controllername}
        control={control} // Ensure you have 'control' from useForm
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextBoxStyle
            {...field}
            placeholder={placeholder}
            onChange={handleChange}
            value={inputValue}
            maxLength={maxLength}
          />
        )}
      />

      <ErrorMessageContainer>
        {errors.message ? (
          <span>{errors?.message?.message}</span>
        ) : (
          <span></span>
        )}
      </ErrorMessageContainer>
    </>
  )
}

export default TextBox
