import styled from 'styled-components'

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 286px;
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 13px;
  color: #64718c;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  white-space: nowrap;

  @media (max-width: 767px) {
    padding: unset;
  }
`
export const ImageContent = styled.div`
  background-color: #fb674b30;
  padding: 13px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 13px;
  color: #64718c;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  white-space: nowrap;

  @media (max-width: 767px) {
    padding: unset;
  }
  &.member-image {
    width: 80px;
    height: 80px;
  }
`
export const TitleContainer = styled.div`
  width: 100%;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const TitleContent = styled.div`
  font-size: 15px;
  font-weight: 700;
  font-family: Inter;
`
export const DetailContainer = styled.div`
  font-size: 13px;
  color: #fff;
  font-weight: 600;
  font-family: Inter;
`
export const ContractContainer = styled.div`
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
export const PriceContainer = styled.div`
  color: rgb(255, 76, 76);
`
export const MachineContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 24px 10px;
  cursor: pointer;

  @media (max-width: 767px) {
    &.mobile-responsive {
      padding: unset;
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

export const MachinePrice = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fb674b;

  @media (max-width: 1448px) {
    font-size: 12px;
  }
  &.counter-price-class {
    color: #fff;
  }
`
export const BidMemberAmountContainer = styled.div`
  display: grid;
  align-items: flex-start;
  height: 100%;
  padding: 10px 10px;
  gap: 8px;
  @media (max-width: 767px) {
    display: flex;
  }
`
export const AmountPercentage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  // height: 24px;
  padding: 4px;
  border-radius: 8px;
  gap: 4px;
  background: #311b29;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #f92727;

  &.upper-price-class {
    background: #311b29;
    color: #f92727;

    svg {
      transform: rotate(180deg);
      stroke: #f92727;
    }
    svg > path {
      stroke: #f92727;
    }
  }
`
export const ActionContainer = styled.div<{ cursor?: boolean }>`
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
export const AssignButtonContainer = styled.button`
  background: none;
  border: none;
  position: relative;
  button {
    background: none;
    height: 40px;
    font-size: 12px;
    letter-spacing: -0.01em;
    color: #fb674b !important;
  }

  &.navbutton-assign {
    button {
      height: 40px;
      width: 100px;
    }

    p {
      position: absolute;
      width: 100px;
      top: 8px;
      left: 0;
    }
  }
`
