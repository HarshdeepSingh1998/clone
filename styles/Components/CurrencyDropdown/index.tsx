import styled from 'styled-components'
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

export const CurrencyDropdownContainer = styled.div`
  display: grid;
  grid-template-columns: 90px 5px 50%;
  align-items: center;
  background: #1c1f30;
  border-radius: 12px;
  height: 48px;
  hr {
    border: none;
    background: #6f767e;
    width: 2px;
    height: 24px;
    border-radius: 50px;
  }
  .deposit-price {
    background: none;
    border: none;
    outline: none;
    padding-left: 5px;
  }
  .deposit-unit {
    border: none;
  }
`
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  .error-message {
    position: absolute;
    width: 120%;
  }
`
