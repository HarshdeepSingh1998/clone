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

  > div {
    max-height: 70vh;
    overflow: hidden auto;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  // justify-content: center;
  position: relative;
  //styleName: Title 1 (Semibold);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #fff;

  span {
    position: absolute;
    right: 0;
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
export const MachnineHistoryContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`

export const MachineContent = styled.div`
  padding: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: rgba(251, 103, 75, 0.19);
  border-radius: 10px;

  img {
    max-width: 51px;
    max-height: 57px;
  }
`
export const TextContainer = styled.div`
  display: grid;
  grid-gap: 6px;

  @media (max-width: 767px) {
    grid-gap: 2px;
  }
`
export const MachineNameContainer = styled.h3`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
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
  /* width: 60%; */
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 16px;
  }

  div {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Inter;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.01em;
    text-align: left;
    color: rgb(255, 255, 255);
    font-size: 10px;

    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      font-size: 12px;
    }
  }

  span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #424962;
    font-size: clamp(8px, 1.06vw, 13px);

    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      font-size: 14px;
    }
  }
`
export const MachineInfo = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #424962;
`
export const DateContainer = styled.div`
  &.date-class {
    background: #fa894928;
    color: #f07d35;
    font-size: 10.3px;
    width: 160px;
    border-radius: 4px;
  }
`
export const BidHistoryPriceContainer = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: rgb(251, 103, 75);
`
export const BiddingHistoryContainer = styled.div`
  color: #64718c;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.36px;
  margin: 18px 0;
`
export const BiddingHistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`
export const CustomerContainer = styled.div<{ cursor?: boolean }>`
  display: flex;
  justify-content: flex-start;
  /* transform: translateX(52px); */
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 8px;
  cursor: ${props => (props.cursor ? 'pointer' : 'default')};

  @media (max-width: 767px) {
    transform: unset;
    width: unset;
    &.mobile-responsive {
      justify-content: unset;
      align-items: unset;
      width: unset;
    }
    &.detail-mobile {
      justify-content: end;
    }
  }
`
export const BiddingHistoryImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: rgba(251, 103, 75, 0.19);
  border-radius: 10px;
  border: 1.5px solid #fb674b;
  margin: 0;
  img {
    max-width: 40px;
    max-height: 40px;
    padding: 8px;
  }
  &.customer {
    background: transparent;
    border-radius: 50%;
    width: max-content;
    height: max-content;
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      margin-left: 40px;
    }

    img {
      width: 3.542vw;
      height: 3.542vw;
      max-width: 44px;
      max-height: 44px;
      @media (max-width: 767px) {
        width: 31px;
        height: 31px;
      }
      @media only screen and (min-width: 768px) and (max-width: 1224px) {
        width: 43px;
        height: 43px;
      }
      @media (max-width: 1366px) {
        max-width: 35px;
        max-height: 35px;
      }
    }
  }
`
export const MemberNameContainer = styled.div`
  font-size: clamp(14px, 1.06vw, 14px);

  font-weight: 700;
  text-align: left;
  color: #ffffff;
  word-break: break-all;
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 14px;
  }
`
export const HistoryPriceContainer = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #fff;

  background: #131529;
  border-radius: 10px;
  display: flex;
`

export const DateTimeContainer = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #797c7b;
  font-family: Inter;
`
export const AdminBidHistoryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  transform: translateX(10px);
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 8px;
  padding-right: 15px;
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
  margin-top: 10px;
  display: flex;
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

export const ButtonContainer = styled.div`
  display: flex;

  gap: 10px;
  button {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 767px) {
    &.mobile-responsive {
      padding-top: unset;
    }
  }
`
