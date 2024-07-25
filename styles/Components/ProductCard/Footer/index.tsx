import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
  padding-top: 10px;
`
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #191f3f;

  &.toggle {
    border: none;
  }

  &.footer {
    flex-direction: column;
    border: none;
  }
`
export const AskPriceContainer = styled.h3`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #ed832f;
  // font-size: 12px;
  // font-weight: 500;
  // line-height: 16px;
  // letter-spacing: -0.01em;

  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    &.bit {
      font-size: 10px;
      font-weight: 400;
    }

    &.quantity-size {
      font-size: 10px;
      font-weight: 400;
    }
  }

  &.quantity {
    color: #fdfdfd;
  }
`

export const HighestBidContainer = styled.div`
  display: flex;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

  @media only screen and (min-width: 768px) and (max-width: 1000px) {
    &.highest-bid {
      font-size: 10px;
      font-weight: 400;
    }
  }
`
