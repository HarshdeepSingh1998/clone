/* eslint-disable no-unused-vars */
import * as React from 'react'
import Select, { selectClasses } from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import DownArrow from '@/assets/images/svg/DownArrow'
import { SelectIndicatorProps } from '@/components/SelectIndicator/types'

export default function SelectIndicator({
  width = '10%',
  placeholder = 'Select',
  options = [],
  value,
  onChange,
  className,
  disabled
}: SelectIndicatorProps) {
  const [inputValue, setInputValue] = React.useState(value)

  React.useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <Select
      className={className}
      value={inputValue}
      placeholder={placeholder}
      indicator={<DownArrow />}
      disabled={disabled}
      onChange={(
        e:
          | React.MouseEvent<Element, MouseEvent>
          | React.KeyboardEvent<Element>
          | React.FocusEvent<Element>
          | React.ChangeEvent<{ value: unknown }>
          | null,
        newValue: string | null | number
      ) => {
        setInputValue(newValue)
        onChange?.(newValue, e as React.ChangeEvent<{ value: unknown }>)
      }}
      sx={{
        width: width,
        background: '#1C1F30',
        color: '#64718C',
        border: '1px solid #363847',
        borderRadius: '12px',
        height: '45px',
        fontFamily: 'Inter',
        fontSize: '15px',
        fontWeight: '600',
        lineHeight: '24px',

        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
            color: '#64718C',
            background: '#1C1F30'
          }
        },
        '&:hover': {
          background: '#1C1F30'
        }
      }}
    >
      {options?.length > 0 &&
        options?.map(
          (item: { label: string; value: string | number }, index: number) => {
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
    </Select>
  )
}
