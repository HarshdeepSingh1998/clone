import styled from 'styled-components'

export const BuyAndHostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: transform 0.5s ease; // Add transition property for slide effect

  width: 490px;
  position: absolute;
  display: flex;
  /* left: 50%; */
  top: 10px;
  left: 52px;
  &.active {
    transform: translateX(0); // Display the active card
    z-index: 1;
  }

  &.prev {
    transform: translateX(-100%); // Slide to the left for the previous card
    z-index: -1;
  }

  &.next {
    transform: translateX(100%); // Slide to the right for the next card
    z-index: -1;
  }

  &.nonactive {
    transform: translateX(-200%); // Move them off-screen
    z-index: -2; // Set a lower z-index
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
    //   left: 90px;
    width: 70%;
    // max-width: 500px;
  }
  // @media only screen and (min-width: 430px) and (max-width: 767px) {
  //   max-width: 500px;
  //   // width: 80%;
  // }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    gap: 0px;
    width: 350px;
    top: 25px;
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
  // width: 399px;
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
