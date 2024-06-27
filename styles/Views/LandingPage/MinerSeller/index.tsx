import styled from 'styled-components'

export const SellerSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 5vw 0;
  position: relative;
  background: radial-gradient(
      66.53% 41.29% at 11.39% 34.48%,
      rgba(255, 76, 46, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    radial-gradient(55.18% 30.5% at 83.78% 67.65%, #572b17 0%, #000513 100%);
  z-index: 1;
  backdrop-filter: blur(8px);
`
export const UpperFanContainer = styled.div`
  svg {
    position: absolute;
    left: 0%;
  }

  @media (max-width: 767px) {
    svg {
      position: absolute;
      left: -7%;
      top: -8%;
    }
  }

  @media (max-width: 767px) {
    svg {
      position: absolute;
      left: -7%;
      top: -8%;
    }
  }
`
export const LowerFanContainer = styled.div`
  svg {
    position: absolute;
    right: 0;
    bottom: -10%;
  }
  @media (max-width: 767px) {
    svg {
      right: -22px;
      bottom: -17%;
    }
  }
  @media (max-width: 767px) {
    svg {
      right: -22px;
      bottom: -17%;
    }
  }
`
export const SellerMainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 50%;

  @media (max-width: 767px) {
    width: 100%;
    gap: 36px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 70%;
    gap: 36px;
  }
`
export const SellerSectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  color: #ed832f;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;

  span:first-child {
    /* Styles for the first span */
    color: var(--Primary-0, #fff);
    text-align: center;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 60px */
    letter-spacing: -1.2px;
  }

  span:nth-child(2) {
    color: #64718c;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
  span:first-child {
    font-size: 24px;
    line-height: 36px;
    z-index: 1;
  }
  span:nth-child(2) {
    font-size: 16px;
    padding: 0px 18px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 12px;
  }
  span:first-child {
    font-size: 24px;
    line-height: 36px;
    z-index: 1;
  }
  span:nth-child(2) {
    font-size: 16px;
    padding: 0px 18px;
  }
`
export const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 47px;
  background: linear-gradient(180deg, #040717 0%, #16172d 103.39%);

  backdrop-filter: blur(2px);
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  position: relative;
  max-width: 600px;

  @media (max-width: 767px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    width: 90%;
  }
`
export const SellerButton = styled.div``
