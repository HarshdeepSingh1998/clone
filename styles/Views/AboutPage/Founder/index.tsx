import Image from 'next/image'
import styled from 'styled-components'
import Test from 'assets/images/images/founder-border.png'
import VectorTabPng from 'assets/images/images/Vector.png'
import VectorMobilePng from 'assets/images/images/vector-mobile-image.png'

export const FounderContainer = styled.div`
  background: radial-gradient(
    226.58% 54.04% at 144.03% 45.08%,
    #38180d 0%,
    #000513 100%
  );

  padding-bottom: 100px;
  display: flex;
  width: 100%;
  align-items: center;
  margin: auto;
  flex-direction: column;
  gap: 10px;
  // max-height: 650px;
  @media (max-width: 767px) {
    gap: 25px;
    // max-height: 242px;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1224px) {
    padding: 100px 44px;
  }
`

export const FounderHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 145px;
  // align-self: stretch;
  width: 100%;
  margin: auto;
  justify-content: center;
  color: var(--Primary-0, #fff);
  text-align: center;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 129.7%;
  text-transform: capitalize;
`
export const FounderProfileContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  /* padding: 0 50px; */
  width: 100%;
  background-image: url(${Test.src});
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  max-width: 1200px;
  @media (max-width: 767px) {
    text-align: center;
    display: unset;
    background-image: url(${VectorMobilePng.src});
    background-origin: content-box;

    background-position: right;
    background-position-y: bottom;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1224px) {
    background-image: url(${VectorTabPng.src});
    background-position: right;
    justify-content: unset;
  }
  padding: 15px;
`
export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 10px;
  transform: translateY(-10px);
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    transform: translateY(-83px);
  }
`
export const FounderProfile = styled(Image)`
  width: 366px;
  height: 444px;
  border-radius: 10px;

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 233px;
    height: 281px;
    margin-bottom: 35px;
    padding-left: 20px;
  }

  @media (max-width: 767px) {
    width: 233px;
    height: 281px;
    color: transparent;
    border-radius: 10px;
  }
`
export const FounderDetails = styled.div`
  padding: 25px;
  border-radius: 12px;
  display: grid;
  width: 48%;
  max-width: 640px;
  grid-template-rows: max-content max-content;
  gap: 10px;
  align-items: start;
  border-radius: 8px;
  @media (max-width: 767px) {
    width: unset;
    // transform: translateY(-401px);
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 68%;
    padding-top: 0px;
  }
`
export const FounderName = styled.h2`
  color: #fafafa;
  font-family: Inter;
  font-size: 40px;
  font-weight: 600;
  line-height: 48.41px;
  text-align: left;

  hr {
    margin: 10px 0 0 0;
    border: none;
    width: 12%;
    height: 2px;
    background: #fafafa;
  }
  @media (max-width: 767px) {
    font-size: 32px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 28px;
  }
`

export const TestimonialData = styled.div`
  display: grid;
  gap: 10px;
  color: #f0f0f0;
  font-size: 16px;
  font-weight: 500;
  line-height: 21.86px;
  text-align: left;
  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 20.49px;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    font-size: 15px;
    line-height: 20.49px;
  }
`
export const TestimonialPara = styled.div`
  display: grid;
  gap: 10px;
  color: #fafafa;
`
