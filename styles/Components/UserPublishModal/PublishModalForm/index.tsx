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
`
export const FieldRow = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 767px) {
    flex-direction: column;
  }

  & > div {
    flex: 1;
  }
`
export const DatePickerContainer = styled.div`
  display: flex;
  gap: 10px;
  // margin-top: 2vw;
  @media (max-width: 767px) {
    flex-direction: column !important;
  }
`
export const InputContent = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 767px) {
    flex-direction: column;
    > div {
      width: 100% !important;
    }
  }
  > div {
    width: 50%;
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
export const NoteContainer = styled.div`
  color: rgb(100, 113, 140);
  font-size: 10px;
  font-weight: 500;
  width: 100%;
  margin-top: 5px;
`
