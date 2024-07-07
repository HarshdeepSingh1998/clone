/* eslint-disable no-unused-vars */
import Select, { OptionProps } from 'react-select'
import { Controller } from 'react-hook-form'
import { ComboBoxInterface, OptionType } from 'components/ComboBox/types'
import {
  customStyles,
  InputContent,
  InputText,
  ErrorMessageContainer
} from '@/styles/Components/ComboBox'

const ComboBox = ({
  assignOption,
  placeholder,
  control,
  controllername,
  defaultValue,
  title,
  errors
}: ComboBoxInterface) => {
  const CustomOption = ({
    innerProps,
    label,
    data
  }: OptionProps<OptionType, false>) => (
    <div {...innerProps}>
      {data.img} {label}
    </div>
  )

  return (
    <InputContent>
      <InputText>{title}</InputText>
      <Controller
        name={controllername}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Select
            {...field}
            options={assignOption}
            components={{ Option: CustomOption }}
            styles={customStyles}
            onChange={selectedOption => {
              selectedOption && field.onChange(selectedOption.value)
            }}
            value={
              assignOption.find(option => option.value === field.value) || null
            }
            placeholder={placeholder}
            menuPosition="absolute"
            menuPlacement="top"
            menuShouldScrollIntoView={false}
            menuPortalTarget={document.body}
            classNamePrefix="my-custom-select"
          />
        )}
      />
      <ErrorMessageContainer>
        {errors[controllername] && (
          <span>{errors[controllername].message}</span>
        )}
      </ErrorMessageContainer>
    </InputContent>
  )
}

export default ComboBox
