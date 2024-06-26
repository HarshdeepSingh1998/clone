import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  @media screen and (max-width: 1366px) {
    gap: 5px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  input {
    width: 100%;
    border: 1px solid #323a4b;
    background: #ffffff14;
    color: #ffffff;
    padding-left: 40px;
    ::placeholder {
      color: #64718c;
    }
  }
  svg {
    position: absolute;
    top: 15px;
    left: 12px;
  }
  span {
    svg {
      position: absolute;
      top: 10px;
      left: 12px;
    }
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding-bottom: 31px;
  button {
    width: 100%;
    max-width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .MuiCircularProgress-root {
    display: flex;
    align-items: flex-end;
  }
`
