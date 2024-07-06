/* eslint-disable no-unused-vars */
import * as React from 'react'
import { Controller } from 'react-hook-form'
import Option from '@mui/joy/Option'
import DownArrow from '@/assets/images/svg/DownArrow'
import { SelectIndicatorProps } from '@/components/SelectIndicator/types'
import {
  StyledSelect,
  InputContent,
  InputText
} from '@/styles/Components/SelectIndicator'

export default function SelectIndicator({
  width = '10%',
  placeholder = 'Select',
  options = [],
  value,
  onChange,
  className,
  disabled,
  control,
  controllername,
  defaultValue,
  title,
  errors
}: SelectIndicatorProps) {
  const [inputValue, setInputValue] = React.useState(value)

  React.useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <InputContent>
      <InputText>{title}</InputText>
      <Controller
        name={controllername}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <StyledSelect
            {...field}
            className={className}
            value={inputValue}
            placeholder={placeholder}
            indicator={<DownArrow />}
            disabled={disabled}
            onChange={(event: any, newValue) => {
              const newValueCasted = newValue as string | number | null
              setInputValue(newValueCasted)
              field.onChange(newValueCasted)
              onChange?.(newValueCasted, event)
            }}
            width={width}
          >
            {options?.length > 0 &&
              options?.map(
                (
                  item: { label: string; value: string | number },
                  index: number
                ) => {
                  return (
                    <Option
                      key={`${item.value}-${index}`}
                      value={item?.value}
                      disabled={item.value === 'btc'}
                    >
                      {item?.label}
                    </Option>
                  )
                }
              )}
          </StyledSelect>
        )}
      />
    </InputContent>
  )
}
