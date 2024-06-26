import styled from 'styled-components'

export const MinerHostingSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 5vw;
  padding-bottom: 3.90625vw;
  position: relative;
  background: radial-gradient(
    64.48% 49.31% at 16.11% 52.25%,
    #622c1a 0%,
    #000513 100%
  );
  backdrop-filter: blur(8px);
`
export const MinerHostingContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 70%;

  @media (max-width: 767px) {
    align-items: unset;
    width: 85%;
    gap: 36px;

    .css-8ucetn-MuiButtonBase-root-MuiIconButton-root {
      color: #e45e44;
    }
    .css-bbreus-MuiButtonBase-root-MuiIconButton-root {
      color: #331e1a;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    align-items: unset;
    width: 100%;
    max-width: 358px;
    gap: 36px;

    .carousel {
      transform: translateX(300px);
      overflow: unset;
      .css-1m9128y {
        transform: translateX(-150px);
        text-align: left;
      }
    }
    .css-8ucetn-MuiButtonBase-root-MuiIconButton-root {
      color: #e45e44;
    }
    .css-bbreus-MuiButtonBase-root-MuiIconButton-root {
      color: #331e1a;
    }
  }
`
export const MinerHostingHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  &:nth-child(1) {
    color: #ed832f;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
  }

  /* Target the second child */
  span:first-child {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 54px */
    letter-spacing: -1.08px;
  }

  /* Target the third child */
  span:nth-child(2) {
    color: #64718c;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.4px;
  }

  @media (max-width: 767px) {
    span {
      &.hosting-dec {
        display: none;
      }
    }
    span:first-child {
      font-size: 24px;
    }
    &:nth-child(1) {
      font-size: 12px;
    }
  }
`
export const MinerHostingCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 19px;
  z-index: 1;
  cursor: pointer;
`
