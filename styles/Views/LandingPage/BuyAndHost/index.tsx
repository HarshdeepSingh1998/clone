import styled from 'styled-components'
import { keyframes } from 'styled-components'
import backgroundImage from 'assets/images/images/fan.png'

export const BuyAndHostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;
  width: 100%;
  padding-bottom: 5vw;
  flex-wrap: wrap;

  background: radial-gradient(50% 50% at 50% 50%, #8b432a 0%, #000513 99.7%);
  backdrop-filter: blur(8px);
`
export const BuyAndHostHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  width: 70%;
`
export const BuyAndHostHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  color: #ed832f;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;

  span {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 54px */
    letter-spacing: -1.08px;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    span {
      font-size: 24px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 12px;
    span {
      font-size: 24px;
    }
  }
`
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const BuyAndHostCardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  // padding-bottom: 5%;
  // flex-wrap: wrap;

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    height: 700px;
  }
  height: 1000px;

  width: 86%;
  max-width: 1078px;
  padding-bottom: 3vw;
  background-size: cover; /* Adjust as needed */
  background-position: center; /* Adjust as needed */
  background-repeat: no-repeat; /* Adjust as needed */
  background-size: contain;
  position: relative;
  &::before {
    content: '';
    background-image: url(${backgroundImage.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: auto; /* Place the pseudo-element behind the content */

    animation: ${rotateAnimation} 3s linear infinite; /* Adjust the duration as needed */
  }

  @media (max-width: 767px) {
    height: unset;
    padding-bottom: 25vw;
    width: 100%;
    &::before {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    // height: unset;
    // &::before {
    //   display: none;
    // }
  }
`
export const BuyAndHostCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 767px) {
    border-radius: 50%;
    padding: 18px;
    max-width: 500px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    border-radius: 50%;
    padding: 18px;
    width: unset;
  }
`
export const BuyAndHostCardLeftArrow = styled.div`
  display: flex;
  width: 111px;
  height: 111px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  position: absolute;
  left: -7%;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.11);

  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, #020615 0%, #17182e 100%);
  }
  @media (max-width: 767px) {
    left: 33%;
    top: 86%;
    width: 62px;
    height: 62px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    left: 4%;
    width: 62px;
    height: 62px;
  }
  /* @media (max-width: 1200px) {
    left: 9%;
    width: 62px;
    height: 62px;
  } */
`
export const BuyAndHostMainContainer = styled.div`
  width: 580px;
  height: 580px;
  border-radius: 50%; /* This makes the element circular */
  background: linear-gradient(180deg, #030616 0%, #16172d 100%);
  padding-top: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  @media (max-width: 767px) {
    height: 470px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 445px;
    height: 437px;
    flex-direction: unset;
  }
`
export const BuyAndHostCardRightArrow = styled.div`
  display: flex;
  width: 111px;
  height: 111px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: absolute;
  /* left: -7%; */
  left: 96.7%;
  /* left: -7%; */
  left: 96.7%;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  cursor: pointer;
  &:hover {
    background: linear-gradient(180deg, #020615 0%, #17182e 100%);
  }
  @media (max-width: 767px) {
    left: 56%;
    top: 86%;
    width: 62px;
    height: 62px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    left: 88.7%;
    width: 62px;
    height: 62px;
  }
`
