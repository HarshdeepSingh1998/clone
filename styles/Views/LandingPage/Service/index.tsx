import styled from 'styled-components'

export const ServiceContentContainer = styled.div`
  width: 100%;
  /* background: #000; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    79.14% 79.14% at 50% 46%,
    #512709 3.82%,
    #000513 53.58%
  );
  backdrop-filter: blur(8px);
`
export const ServiceCardContainer = styled.div`
  width: 70%;
  padding-bottom: 6.25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // gap: 15px;
  position: relative;
  @media (max-width: 767px) {
    width: 77%;
    padding-bottom: 60px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 82%;
  }
`
export const ServiceHeading = styled.div`
  color: #ed832f;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;

  @media (max-width: 767px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 12px;
  }
`
export const ServiceSubheading = styled.div`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 54px */
  letter-spacing: -1.08px;
  @media (max-width: 767px) {
    font-size: 24px;
    letter-spacing: unset;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 24px;
  }
`
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  z-index: 1;
  margin-top: 2vw;
  width: 100%;
  max-width: 1000px;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`
