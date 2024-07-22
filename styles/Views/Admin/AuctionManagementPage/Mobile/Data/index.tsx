import styled from 'styled-components'

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
    gap: 6px;
    font-size: 16px;
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
export const MachineInfoContainer = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #424962;
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
export const AskPriceContainer = styled.div`
  color: #ff4c4c;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
`

export const BidAmountContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  gap: 8px;
`
export const MachinePriceContainer = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fb674b;
  &.bid-amount-class {
    color: #f92727;
  }

  @media (max-width: 1448px) {
    font-size: 12px;
  }
`
export const AmountPercentageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;

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
`
export const AuctionEndDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;

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

  &.time-remaining {
    font-family: Inter;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #f92727;
    width: 103px;
    // height: 24px;
    gap: 12px;
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      width: 70px;
    }
    @media screen and (max-width: 1366px) {
      font-size: 12px;
    }
  }
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: rgba(251, 103, 75, 0.19);

  img {
    max-width: 51px;
    max-height: 57px;
    border-radius: 50%;
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
export const BidderContainer = styled.div`
  width: 100%;
  max-width: 120px;
  display: grid;
  grid-gap: 6px;
  margin-left: 5px;
  @media (max-width: 767px) {
    grid-gap: 2px;
  }
`
export const BidderContent = styled.h4`
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  text-align: left;
  color: #ffffff;
  word-break: break-all;
`
export const BidderContactNumber = styled.p`
  font-family: Inter;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-align: left;
  color: #9a9fa5;
  word-break: break-all;

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 12px;
  }
`
