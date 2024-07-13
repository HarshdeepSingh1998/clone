import styled from 'styled-components'

export const ImageContainer = styled.div<{ profileImage?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: rgba(251, 103, 75, 0.19);
  border-radius: 10px;

  &.sales-image {
    width: 65px;
    height: 67px;
    img {
      max-width: 43px;
      max-height: 43px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      width: 70px;
      height: 70px;
      img {
        max-width: 46px;
        max-height: 46px;
      }
    }
  }
  img {
    max-width: 51px;
    max-height: 57px;
    ${({ profileImage }) =>
      profileImage &&
      `
      border-radius: 50px;
    `}
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
  &.customer-mobile {
    background: transparent;
    border-radius: 50%;
    width: max-content;
    height: max-content;
    img {
      @media (max-width: 767px) {
        width: 40px;
        height: 40px;
      }
    }
  }
  &.member {
    background: transparent;
    border-radius: 50%;
    width: max-content;
    height: max-content;
    img {
      width: 3.542vw;
      height: 3.542vw;
      max-width: 56px;
      max-height: 56px;
    }
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

  &.model-name {
    font-size: 28px;
    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
  &.reject-modal-name {
    font-size: 15px;
  }

  /* @media (max-width: 1560px) {
    font-size: 14px;
  } */
`

export const DetailContainer = styled.p`
  display: flex;

  align-items: center;
  gap: 10px;
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

  &.mobile-machine-modal-text {
    gap: 6px;
  }

  &.mobile-machine-modal {
    font-size: 16px;
    width: 100%;
  }

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

    &.mobile-sn {
      font-size: 12px;
    }
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

    &.mobile-hashrate {
      font-size: 14px;
    }

    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      font-size: 14px;
    }
  }
`
export const AdditionalDetailContainer = styled.div`
  display: grid;
  gap: 5px;

  @media (max-width: 767px) {
    gap: unset;
  }
`
export const ContractContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 10px;
`
export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 3px;
  font-family: Inter;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #64718c;
  align-items: center;
  /* &.host-rate {
    margin-right: 14px;
  } */
  &.host-rate {
    margin-right: 0px;
  }
`
export const TransactionContainer = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fb674b;
  &.bid-amount {
    color: #f92727;
    text-align: center;
  }
  &.bid-amount-class {
    color: #f92727;
  }
  &.counter-price {
    display: flex;
    justify-content: center;
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #ffffff;
  }
  &.admin-counter-price {
    display: flex;
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #ffffff;
    padding-left: 35px;
    @media (max-width: 767px) {
      padding: unset;
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      padding: unset;
    }
  }
  &.counter-price-class {
    display: flex;
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin-left: 13px;
  }
  &.transcation-id-class {
    font-family: Inter;
    padding-left: 5px;
    font-size: 12px;
    font-weight: 400;
    color: #ffffff;
    width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 767px) {
      padding-left: unset;
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      padding: unset;
      width: unset;
    }
  }
  &.offer-price {
    display: flex;
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #ffffff;
    padding-left: 13px;
    @media (max-width: 767px) {
      padding-left: unset;
    }
  }
  @media (max-width: 1448px) {
    font-size: 12px;
  }
`
export const PaymentContainer = styled.div<{ background: boolean }>`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  width: 95px;
  border-radius: 4px;
  /* background-color: ${props =>
    props.background
      ? 'rgba(47, 237, 55, 0.15)'
      : 'rgba(237, 131, 47, 0.15)'}; */
  color: ${props => (props.background ? '#469B59' : '#FA8949')};

  @media (max-width: 767px) {
    padding: unset;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: unset;
  }
`
export const TotalContainer = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fb674b;
  &.bid-amount {
    color: #f92727;
    text-align: center;
  }
  &.bid-amount-class {
    color: #f92727;
  }
  &.counter-price {
    display: flex;
    justify-content: center;
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #ffffff;
  }
  &.admin-counter-price {
    display: flex;
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #ffffff;
    padding-left: 35px;
    @media (max-width: 767px) {
      padding: unset;
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      padding: unset;
    }
  }
  &.counter-price-class {
    display: flex;
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin-left: 13px;
  }
  &.transcation-id-class {
    font-family: Inter;
    padding-left: 5px;
    font-size: 12px;
    font-weight: 400;
    color: #ffffff;
    width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 767px) {
      padding-left: unset;
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      padding: unset;
      width: unset;
    }
  }
  &.offer-price {
    display: flex;
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #ffffff;
    padding-left: 13px;
    @media (max-width: 767px) {
      padding-left: unset;
    }
  }
  @media (max-width: 1448px) {
    font-size: 12px;
  }
`
export const ButtonContainer = styled.div<{ variant?: string }>`
  button {
    display: flex;
    height: 51px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 64px;
    font-family: Inter;
    padding: 1px 9px;
    width: unset;
    height: 38px;
    lineheight: unset;
  }

  @media (max-width: 767px) {
    button {
      padding: 0px 16px;
      height: 43px;
    }
    &.mobile-nav {
      display: flex;
      gap: 10px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    button {
      padding: 0px 16px;
      height: 43px;
    }
    &.mobile-nav {
      display: flex;
      gap: 10px;
    }
  }
`
export const ClosedAmountContainer = styled.div`
  width: 80%;
  /* max-width: 247px; */
  /* max-width: 457px; */
  border-right: 1px solid #404353;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 11px;
  padding-left: 94px;
  /* justify-content: center;
  align-items: center; */
  @media (max-width: 767px) {
    padding-left: unset;
  }
`
export const HeadingContainer = styled.div`
  color: #64718c;
  text-align: left;
`

export const AmountContainer = styled.div`
  .amount {
    padding-right: 30px !important;
  }
`
export const DepositAmountContainer = styled.div`
  width: 100%;
  /* max-width: 300px; */
  max-width: 486px;
  border-right: 1px solid #404353;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;
`
export const SetupFeeContainer = styled.div`
  width: 100%;
  /* max-width: 280px; */
  max-width: 421px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;
`
