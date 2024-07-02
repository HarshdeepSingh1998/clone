import { ChangeEvent } from 'react'
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
  maxLength,
  errors
}: TextBoxProps) => {
  return (
    <>
      <TextContainer>{title}</TextContainer>
      <Controller
        name={controllername}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextBoxStyle
            {...field}
            name={controllername}
            placeholder={placeholder}
            value={field.value || ''}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              field.onChange(e)
              onChange?.(e.target.value)
            }}
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
