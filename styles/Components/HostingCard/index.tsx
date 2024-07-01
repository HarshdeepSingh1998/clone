import styled from 'styled-components'

export const HostingCardContainer = styled.div<{
  isSelected: boolean
  screenType: string
}>`
  display: inline-flex;
  padding: 30px 20px 20px 20px;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  border-radius: 47px;
  border: ${props =>
    props.isSelected ? '1.5px solid #FB674B' : '1.5px solid #1b202b'};
  width: 100%;
  max-width: 400px;
  background: ${props =>
    props.isSelected
      ? 'linear-gradient(180deg, #030616 0%, #121428 100%)'
      : 'linear-gradient(180deg, #040717 0%, rgba(18, 20, 40, 0) 100%)'};
  ${props =>
    props.screenType !== 'mobile' &&
    `
    height: 442px;
    justify-content: space-between;
  `}
  &:hover {
    border: 1px solid #fb674b;
    background: linear-gradient(180deg, #030616 0%, #121428 100%);
  }
  @media (max-width: 767px) {
    gap: 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    gap: 10px;
  }
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  /* gap: 8px; */
  align-self: stretch;
  color: #ed832f;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: -0.72px;
  align-items: center;

  @media (max-width: 767px) {
    font-size: 20px;
  }
  span {
    font-size: 50px;
    span {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 20px;
  }
  span {
    font-size: 45px;
    span {
      font-size: 20px;
    }
  }
`
export const ImageContainer = styled.div<{ index: number; screenType: string }>`
  ${props =>
    props.index === 0 &&
    `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `};

  div {
    ${props =>
      props.index === 0 &&
      props.screenType !== 'mobile' &&
      `
      width: 50%;
    `}

    ${props =>
      props.index === 0 &&
      props.screenType === 'mobile' &&
      `
      width: 30%;
      height: 103px;
    `}
  }

  ${props =>
    props.index === 1 &&
    `
    width: 25%;

    div {
     transform: rotate(90deg)
    }
  `};

  ${props =>
    props.index === 2 &&
    `
    width:53%;
  `};
`
export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`
export const CardUpperTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  /* gap: 8px; */
  align-self: stretch;
  color: #ed832f;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: -0.72px;
  align-items: center;

  span {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 105px */
    letter-spacing: -2.1px;
    span {
      color: #fff;
      font-family: Inter;
      font-size: 23px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: -0.69px;
    }
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
  span {
    font-size: 50px;
    span {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 20px;
  }
  span {
    font-size: 45px;
    span {
      font-size: 20px;
    }
  }
`

export const CardLowerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2px;
  color: #636a7a;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;

  span {
    color: #fb674b;
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
    letter-spacing: -0.48px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  width: 100%;
  button {
    padding: 10px 36px;
  }
`
