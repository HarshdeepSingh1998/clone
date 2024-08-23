import styled from 'styled-components'

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ProductListContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  color: #90a3bf;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  // padding: 5px 0;
  text-transform: capitalize;
  &.product-list-content {
    flex-direction: column;
    gap: 10px;
  }
`
export const AskingPriceContainer = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #fb674b;
  span {
    font-size: 14px;
    color: #90a3bf;
    font-weight: 500;
    padding-right: 0;
  }
  @media (max-width: 767px) {
    font-size: 15px;
  }
`
export const LotContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
export const LotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const ImageContainer = styled.div`
  position: relative;
  height: 55px;
  width: 55px;
  border-radius: 10px;
  background: #fb674b30;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    width: 45px;
    height: 45px;
  }

  @media (max-width: 767px) {
    height: 60px;
    width: 60px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    height: 60px;
    width: 60px;
  }
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
    color: #fb674b;
    fontsize: 12px;
    text-overflow: ellipsis;
    font-family: Inter;
    font-weight: 700;
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
    color: #fff;
    font-size: 10px;
    &.mobile-hashrate {
      color: rgb(66, 73, 98);
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      font-size: 14px;
    }
  }
`
export const SerialNumberContainer = styled.div`
  font-family: Inter;
  font-size: clamp(8px, 1.06vw, 15px);
  font-weight: 700;
  line-height: 19.36px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fff !important;
  display: flex;
  align-items: center;
`
export const BorderBottom = styled.div`
  border-bottom: 1px solid #404353;
`
export const QuantityContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #fff;
  span {
    color: #fb674b;
  }
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
`
export const TotalPriceContainer = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  color: #fff;
  span {
    color: #fb674b;
  }
`
