import styled from 'styled-components'

export const AccordianContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const AccordianContent = styled.div`
  display: flex;
  align-items: center;
`
export const ModelNameContainer = styled.h3`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ButtonContainer = styled.div<{ disabled: boolean }>`
  button {
    display: flex;
    height: 26px;
    width: 70px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 64px;
    font-family: Inter;
    font-size: 12px;

    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  }
`
export const MachineContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 24px 10px;
  cursor: pointer;
  &.sales-machine {
    padding: 0;
    width: 100%;
    max-width: 239px;
    gap: 10px;
  }
  &.sales-mobile-machine {
    padding: unset;
    width: 100%;
    /* max-width: 260px; */
    color: #424962;
    font-size: 14px;

    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      max-width: unset;
    }
  }
  @media (max-width: 767px) {
    &.mobile-responsive {
      padding: unset;
    }
  }
`
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
export const DetailRowContainer = styled.p`
  display: flex;

  align-items: center;
  gap: 10px;
`
export const InformationContainer = styled.div`
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
export const DetailContainer = styled.div`
  display: grid;
  gap: 5px;

  @media (max-width: 767px) {
    gap: unset;
  }
`
export const DescriptionContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 10px;
`
export const DescriptionContent = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 3px;
  font-family: Inter;
  font-size: 12px;
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
export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ContractContainer = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #fff;
  width: 20%;

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    /* margin-right: 44px;
    justify-content: center; */
  }

  &.mobile-responsive {
    width: 100%;
    display: flex;
    align-items: center;
    /* gap: 35px; */
    text-align: unset;
    line-height: unset;

    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      width: 52%;
    }
  }
  &.mobile-responsive-member {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: unset;
    line-height: unset;

    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      width: 52%;
    }
  }
  &.contract-responsive-header {
    width: 100%;
    display: flex;
    gap: 30px;
    text-align: unset;
    padding-bottom: 15px;
    justify-content: space-between;
  }
`

export const HeaderContainer = styled.div`
  font-family: Inter;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #64718c;
  width: 20%;
  &.mobile-header {
    font-size: 12px;
    text-align: unset;
    width: 35%;
    gap: 30px;
  }
  &.contract-header {
    width: 50%;
    font-size: 12px;
    text-align: unset;
    gap: 30px;
  }
  &.padding-inventory {
    transform: 'translateX(-14px)';

    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      transform: 'translateX(14px)';
    }
  }
`
export const AdditonalInformationContainer = styled.div`
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
export const PaymentReceivedContainer = styled.div<{ background: boolean }>`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  padding: 6px 12px;
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
export const CustomerImageContainer = styled.div`
  display: flex;
  justify-content: start;
  transform: translateX(36px);
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 8px;

  @media (max-width: 767px) {
    transform: translateX(0px);
    gap: 5px;
    width: unset;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: unset;
    transform: unset;
  }
`
export const NameContainer = styled.h4`
  font-family: Inter;
  font-size: clamp(8px, 1.06vw, 16px);
  font-weight: 700;
  text-align: left;
  color: #ffffff;
  word-break: break-all;

  &.member-details {
    font-size: 28px;
  }
  &.sales-customer-name {
    @media (max-width: 1366px) {
      white-space: nowrap;
    }
    @media (max-width: 1660px) {
      font-size: 13px;
    }
  }
  @media (max-width: 767px) {
    font-size: 12px;
    &.member-text {
      font-size: 14px;
    }
    &.member-details {
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 14px;
  }
  @media (max-width: 1600px) {
    &.sales-customer-name {
      display: none;
    }
    &.sales-customer-no {
      display: none;
    }
  }
`
export const NumberContainer = styled.p`
  font-family: Inter;
  font-size: clamp(7px, 0.9vw, 13px);
  font-weight: 600;
  letter-spacing: -0.01em;
  text-align: left;
  color: #9a9fa5;
  word-break: break-all;
  @media (max-width: 1366px) {
    font-size: 10px;
    white-space: nowrap;
  }
  @media (max-width: 1366px) {
    &.member-text {
      font-size: 12px;
    }
  }
  &.member-details {
    font-size: 14px;
  }
  @media (max-width: 767px) {
    &.member-details {
      font-size: 12px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 12px;
  }
`
