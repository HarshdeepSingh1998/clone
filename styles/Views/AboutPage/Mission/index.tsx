import styled from 'styled-components'

export const MissionContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 60px;
  margin: auto;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 5vw;
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding-bottom: 10vw;
  }
  background: radial-gradient(50% 50% at 50% 50%, #8b432a 0%, #000513 83.12%);
`
export const MissionContent = styled.div`
  width: 70%;
  /* background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3169642857142857) 31%, rgba(237,131,47,0.14609593837535018) 49%, rgba(0,0,0,0.32) 76%, rgba(0,0,0,0.4962359943977591) 100%); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  position: relative;
  margin: auto;
  @media (max-width: 767px) {
    width: 75%;
    // transform: translateY(861px);
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 93%;
  }
`
export const MissionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  &:first-child {
    color: #ed832f;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
  }

  /* Targeting the first span child */
  span:first-child {
    color: var(--Primary-0, #fff);
    text-align: center;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 129.7%; /* 46.692px */
    text-transform: capitalize;
  }

  /* Targeting the second span child */
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
    &:first-child {
      font-size: 12px;
    }
    span:first-child {
      font-size: 24px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    &:first-child {
      font-size: 12px;
    }
    span:first-child {
      font-size: 24px;
    }
  }
`
export const MissionCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  z-index: 1;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 22px;
  }
`
export const MissionCard = styled.div<{ cardNumber: number }>`
  display: inline-flex;
  padding: 41px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 40px;
  height: 384px;
  background: linear-gradient(180deg, #030616 0%, #15162b 100%);
  background: ${({ cardNumber }) => {
    switch (cardNumber) {
      case 0:
        return 'linear-gradient(180deg, #030616 0%, #15162b 100%)'
      case 1:
        return 'linear-gradient(180deg, #fb674b 0%, #522010 100%)'
      case 2:
        return 'linear-gradient(180deg, #ed832f 0%, #5d4120 100%)'
      default:
        return 'linear-gradient(180deg, #030616 0%, #15162b 100%)'
    }
  }};
  transform: ${({ cardNumber }) =>
    cardNumber === 1 ? 'translateY(80px)' : 'translateY(0px)'};

  @media (max-width: 767px) {
    transform: ${({ cardNumber }) => cardNumber === 1 && 'translateY(0px)'};
  }
`
export const MissionCardContent = styled.div`
  display: flex;
  // width: 277px;
  max-width: 277px;
  flex-direction: column;
  align-items: center;
  gap: 29px;
`
export const MissionCardText = styled.div`
  display: flex;
  // width: 305.665px;
  // height: 145.191px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  //   flex-shrink: 0;

  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.72px;

  span {
    text-align: center;
    color: #ffffff57;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */

    &.data-mission {
      color: #64718c;
    }
    &.data-value {
      color: #ffffff7a;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      line-height: 20px;
    }
  }
`
