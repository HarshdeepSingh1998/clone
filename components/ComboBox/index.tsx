/* eslint-disable no-unused-vars */
import Select, { OptionProps, StylesConfig } from 'react-select'
import { ComboBoxInterface, OptionType } from 'components/ComboBox/types'

const ComboBox = ({
  assignOption,
  onSelect,
  placeholder
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
  const customStyles: StylesConfig<OptionType, false> = {
    control: provided => ({
      ...provided,
      width: '100%',
      height: '48px',
      padding: '12px',
      borderRadius: '12px',
      border: '1px solid #363847',
      background: '#1C1F30',
      position: 'relative',
      boxShadow: 'none',
      justifyContent: 'space-between',
      '& .css-1fdsijx-ValueContainer': {
        // other styles
        transform: 'translateY(-18px)',
        color: '#fff'
      },
      '& .css-gy3lex-IndicatorsContainer': {
        transform: 'translateY(-18px)'
      }
    }),
    indicatorsContainer: provided => ({
      ...provided,
      marginLeft: '8px' // Adjust the margin as needed
    }),
    option: (provided, state) => ({
      ...provided,
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: state.isSelected
        ? '#007BFF'
        : state.isFocused
          ? '#0056b3'
          : 'white',
      color: state.isSelected ? 'white' : state.isFocused ? 'white' : 'black'
    }),
    menuPortal: provided => ({
      ...provided,
      zIndex: 9999
    }),
    menu: provided => ({
      ...provided,
      width: '100%',
      background: '#1C1F30'
    }),
    menuList: provided => ({
      ...provided,
      display: 'flex',
      flexDirection: 'column',
      div: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '10px'
      }
    })
  }

  return (
    <Select
      options={assignOption}
      components={{ Option: CustomOption }}
      styles={customStyles}
      onChange={selectedOption => {
        onSelect(selectedOption)
      }}
      placeholder={placeholder}
      menuPosition="absolute"
      menuPlacement="top"
      menuShouldScrollIntoView={false}
      menuPortalTarget={document.body}
      classNamePrefix="my-custom-select"
    />
  )
}

export default ComboBox
