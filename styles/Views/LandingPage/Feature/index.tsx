import styled from 'styled-components'

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 5vw;
  padding-bottom: 3.91vw;

  background: radial-gradient(
    87.58% 46.04% at 4.03% 41.08%,
    #38180d 0%,
    #000513 100%
  );
  backdrop-filter: blur(8px);
`
export const FeatureSection = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  margin: auto;
  @media (max-width: 767px) {
    width: unset;
    gap: 40px;
  }
  @media (max-width: 767px) {
    width: unset;
    gap: 40px;
  }
`
export const FeatureHeadingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 12px;
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

export const FeatureSubHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 18px;

  color: var(--Primary-0, #fff);
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 60px */
  letter-spacing: -1.2px;

  span {
    color: #64718c;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
  }
  @media (max-width: 767px) {
    font-size: 24px;
    font-weight: 500;
    span {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 24px;
    font-weight: 500;
    span {
      display: none;
    }
  }
`
export const FeatureContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  max-width: 630px;
`
export const FeatureCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  // justify-content: space-between;
`
export const FeatureCard = styled.div`
  display: flex;
  // flex-direction: column;
  // align-items: center;
  gap: 33px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    gap: 40px;
  }
  @media (max-width: 767px) {
    gap: 40px;
  }
`
export const Container = styled.div`
  width: calc(40% - 68px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  color: var(--Primary-0, #fff);
  text-align: center;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;
  @media (max-width: 767px) {
    width: calc(58% - 71px);
    font-size: 14px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 14px;
  }
`
export const CardImage = styled.div`
  display: flex;
  flex-direction: column;
  // width: 103px;
  // height: 103px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: rgba(251, 98, 79, 0.13);
  width: 100px;
  height: 100px;

  color: var(--Primary-0, #fff);
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;

  img {
    width: 49px;
    height: 49px;
  }
`
