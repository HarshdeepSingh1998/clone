import styled from 'styled-components'

export const OtpContainer = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding-bottom: 16px;
  @media (max-width: 390px) {
    padding: 20px 0px;
    gap: 7px;
  }
  input {
    width: 45px;
    min-height: 54px;
    background-color: #ffffff14;
    border: 1px solid #ffffff19;
    border: none;
    border-radius: 12px;
    font-size: 25px;
    text-align: center;
    color: #ffffff;
    ::placeholder {
      color: #d22929;
    }
    &:hover {
      border: 2px solid #fb674b;
      outline: none;
    }
    :focus-visible {
      outline: none;
    }
  }
`

export const ButtonContainer = styled.div`
  padding-top: 0px;
  .css-18lrjg1-MuiCircularProgress-root {
    color: #fff;
  }
  &.button-container {
    padding-top: 20px;
  }
  /* padding-top: 20px; */
  button {
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const OtpContent = styled.div`
  display: flex;
  gap: 10px;
`
