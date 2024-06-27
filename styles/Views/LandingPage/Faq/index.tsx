import styled from 'styled-components'

export const FaqSectionContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 32px;
  background: radial-gradient(
    87.58% 46.04% at 4.03% 58.08%,
    #38180d 0%,
    #000513 100%
  );
  backdrop-filter: blur(8px);
  @media (max-width: 767px) {
    padding-top: 74px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding-top: 60px;
  }
`
export const FaqSectionContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 62px;
  width: 70%;
  @media (max-width: 767px) {
    width: 100%;
    padding: 0px 16px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 80%;
  }
`
export const FaqSectionHeading = styled.div`
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

    @media (max-width: 767px) {
      font-size: 24px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      font-size: 24px;
    }
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
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 12px;
  }
`
export const FaqAccordianContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 39px;
  flex-wrap: wrap;

  max-width: 1000px;

  @media (max-width: 767px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    flex-direction: column;
  }
`
