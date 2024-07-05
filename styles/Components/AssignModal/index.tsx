import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  background: linear-gradient(rgb(3, 6, 22) 0%, rgb(22, 23, 45) 100%);

  flex-direction: column;
  border-radius: 20px;
  padding: 40px;
  width: 602px;

  @media (max-width: 767px) {
    width: 365px;
    padding: 20px;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  // justify-content: center;

  //styleName: Title 1 (Semibold);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #fff;

  span {
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #a9acb4;
  }

  margin-bottom: 1vw;
  @media (max-width: 767px) {
    padding-bottom: 30px;
  }
`

export const BoxImage = styled.div`
  display: flex;
  width: 20px;
  height: 35px;
  border-radius: 5px;
  background: #fb674b52;
`

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
  .css-166bipr-Input {
    color: #fff !important;
  }
  .rsw-toolbar {
    height: 48px;
    background: none;
    border: none;
  }
  .rsw-btn:hover {
    background-color: #2c304f;
  }
  .rsw-btn {
    color: #64718c;
    font-size: 25px;

    svg {
      width: 32px !important;
    }
  }
  .rsw-btn[data-active='true'] {
    background: none !important;
  }
  .rsw-editor {
    border: 1px solid #9a9fa53f;
  }
  .rsw-ce {
    height: 112px;
    background-color: #0e1023;
    color: #fff;
    padding-left: 10px;
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
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding-bottom: 31px;
  gap: 20px;
  button {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .MuiCircularProgress-root {
    display: flex;
    align-items: flex-end;
  }
`
