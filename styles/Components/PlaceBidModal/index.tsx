import styled from 'styled-components'
export const ModalContainer = styled.div`
  display: flex;
  background: linear-gradient(rgb(3, 6, 22) 0%, rgb(22, 23, 45) 100%);

  flex-direction: column;
  border-radius: 20px;
  padding: 40px;
  width: 602px;

  @media (max-width: 767px) {
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
  max-height: 70vh;
  overflow: hidden auto;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 10px;
    input {
      border: 1px solid #323a4b;
      background: #ffffff14;
      ::placeholder {
        color: #64718c;
      }
    }
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
`
export const DetailContainer = styled.div`
  display: flex;
  gap: 10px;
  > div {
    flex: 1;
  }
`
export const HostingDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  flex: 1;
`
export const HostingDetailBorderBottom = styled.div`
  border-bottom: 1px solid #fb674b;
  margin: 7px 0;
`
export const ModalNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-family: Inter;
  font-size: clamp(8px, 1.06vw, 15px);
  font-weight: 700;
  line-height: 19px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fff;
  word-wrap: break-word;
  overflow-wrap: break-word;
  &.mobile-machine-modal {
    font-size: 16px;
    color: #fff !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 16px;
  }

  div {
    overflow: hidden;
    color: #fff;
    font-size: 12px;
    text-overflow: ellipsis;
    font-family: Inter;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.01em;
    text-align: left;
  }

  span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #fb674b;
    font-size: 10px;
    &.mobile-hashrate {
      color: rgb(66, 73, 98);
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      font-size: 14px;
    }
  }
`
export const Container = styled.div`
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  max-width: unset;
`
