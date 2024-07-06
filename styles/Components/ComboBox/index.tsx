import styled from 'styled-components'
import { StylesConfig } from 'react-select'
import { OptionType } from 'components/ComboBox/types'

export const customStyles: StylesConfig<OptionType, false> = {
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
      transform: 'translateY(-9px)',
      color: '#fff'
    },
    '& .css-gy3lex-IndicatorsContainer': {
      transform: 'translateY(-9px)'
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
  }),
  input: provided => ({
    ...provided,
    color: '#fff'
  })
}
export const InputContent = styled.div`
  width: 100%;
  position: relative;
  @media (max-width: 767px) {
    padding: 0px 0px 12px 0px;
  }

  ::placeholder {
    color: #64718c;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    /* padding: 10px; */
  }
`
export const InputText = styled.div`
  color: #90a3bf;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  // padding: 5px 0;
  text-transform: capitalize;
`
