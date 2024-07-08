import styled from 'styled-components'

export const DatePickerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  .MuiInputBase-root {
    background: rgb(28, 31, 48) !important;
    border-radius: 10px;
    height: 47px;
    // border: 1px solid #252c3d;
  }

  input {
    color: #6f767e !important;
    background: transparent !important;
    border: none !important;
  }

  button {
    color: #6f767e;
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
export const ErrorMessageContainer = styled.div`
  width: 100%;
  font-size: 13.5px;
  color: #ed832f;
  padding-top: 10px;
  margin-left: 6px;
  padding-top: 5px;
`
