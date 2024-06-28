import styled from 'styled-components'

export const BuyAndHostContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.5s ease;

  width: 490px;
  position: absolute;
  z-index: 1;
  display: flex;
  &.active {
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 1;
  }

  &.prev {
    transform: translate(-100%, -50%);
    z-index: -1;
  }

  &.next {
    transform: translate(100%, -50%);
    top: 50%;
    left: 50%;
    z-index: -1;
  }

  &.nonactive {
    transform: translate(-200%, -50%);
    z-index: -2;
  }

  &::before,
  &::after {
    content: '';
    width: 8px; /* Adjust the width based on the desired gap */
  }

  &::after {
    margin-left: 8px; /* Create the gap after the card */
  }
  @media (max-width: 767px) {
    width: 70%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    gap: 0px;
    width: 350px;
  }
`
export const BuyAndHostImage = styled.div`
  @media (min-width: 1225px) {
    margin-top: 2vw;
  }

  img {
    width: 190px;
    height: 227px;
  }
  @media (max-width: 767px) {
    img {
      width: 140px;
      height: 156px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    img {
      width: 137px;
      height: 156px;
    }
  }
`
export const BuyAndHostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  color: #ed832f;
  text-align: center;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 78.261% */
  margin-bottom: 20px;
  margin-top: 15px;
  @media (max-width: 767px) {
    gap: 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    gap: 10px;
  }
`
export const BuyAndHostTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 64.706% */
  @media (max-width: 767px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 18px;
  }
`
export const BuyAndHostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  color: rgba(255, 255, 255, 0.42);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 112.5% */

  span {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 112.5% */
  }
  p {
    color: #fff;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    span {
      font-size: 14px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 14px;
    span {
      font-size: 14px;
    }
  }
`
export const BuyAndHostPriceContainer = styled.div<{
  isQuantityPresent?: boolean
}>`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: ${props => (props.isQuantityPresent ? '20px' : '0px')};
`
export const BuyAndHostButtonContainer = styled.div``
