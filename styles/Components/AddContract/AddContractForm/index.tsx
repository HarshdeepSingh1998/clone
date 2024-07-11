import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  @media screen and (max-width: 1366px) {
    gap: 5px;
  }
  max-height: 70vh;
  overflow: hidden auto;
`
export const InputContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 10px;
    input {
      width: 100%;
      border: 1px solid #323a4b;
      background: #ffffff14;

      // padding-left: 40px;
      ::placeholder {
        color: #64718c;
      }
    }
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  & > div:nth-child(1) {
    grid-column: span 2;
  }

  & > div:nth-child(2),
  & > div:nth-child(3) {
    grid-column: span 1;
  }

  & > div:nth-child(4),
  & > div:nth-child(5) {
    grid-column: span 1;
  }

  & > div:nth-child(6) {
    grid-column: span 2;
  }

  & > div:nth-child(7) {
    grid-column: span 2;
  }
  & > div:nth-child(8) {
    grid-column: span 2;
  }
`

export const ButtonContainer = styled.div<{ disable?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding-bottom: 31px;
  gap: 10px;
  button {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props =>
      props.disable &&
      `
      opacity: 0.5;
      cursor: not-allowed;
      background-color: grey
    `}
  }

  .MuiCircularProgress-root {
    display: flex;
    align-items: flex-end;
  }
`
