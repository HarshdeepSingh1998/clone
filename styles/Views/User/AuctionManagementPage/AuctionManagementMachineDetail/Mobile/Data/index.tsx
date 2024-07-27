import styled from 'styled-components'
export const MemberContainer = styled.div<{ cursor?: boolean }>`
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
export const ImageContainer = styled.div`
  img {
    width: 40px;
    height: 40px;
    max-width: 44px;
    max-height: 44px;
    border-radius: 50%;
  }
`
export const BidderContainer = styled.div`
  width: 100%;
  max-width: 120px;
  display: grid;
  grid-gap: 6px;

  @media (max-width: 767px) {
    grid-gap: 2px;
  }
`
export const BidderContent = styled.h4`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  color: #ffffff;
  word-break: break-all;
`
export const BidderContactNumber = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-align: left;
  color: #9a9fa5;
  word-break: break-all;
`

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const ProductDescriptionContainer = styled.div`
  font-size: 13px;
  color: #9a9fa5;
  font-weight: 600;
  font-family: Inter;
`
export const DescriptionContainer = styled.div`
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

  &.contract-header {
    width: 50%;
    font-size: 12px;
    text-align: unset;
    gap: 30px;
  }
`
export const DepositAmountContainer = styled.div`
  color: #ff4c4c;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  line-height: 16px;
  letter-spacing: -0.01em;
  white-space: nowrap;
`

export const MachineInfoContainer = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #424962;
`
export const MachinePriceContainer = styled.div`
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
export const BidMemberAmountContainer = styled.div`
  display: grid;
  align-items: flex-start;
  height: 100%;
  gap: 8px;
  @media (max-width: 767px) {
    display: flex;
  }
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
