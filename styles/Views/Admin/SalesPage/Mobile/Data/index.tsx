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

  &.mobile-responsive {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: unset;
    line-height: unset;
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
`
export const AdditonalInformationContainer = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fb674b;
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
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 12px;
  }
`
