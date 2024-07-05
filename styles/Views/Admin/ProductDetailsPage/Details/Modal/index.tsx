import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 767px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 100%;
  }
`
export const HeadingContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  word-break: break-all;
  //styleName: H4;
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.03em;
  text-align: left;
  width: 70%;
  span {
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #6f767e;
  }
  @media (max-width: 767px) {
    width: 100%;
    font-size: 30px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 100%;
    font-size: 30px;
  }
`
export const PublishNowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: end;

  @media (max-width: 767px) {
    width: 100%;
    align-items: unset;
  }
`
export const ProfileContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #aeaebc;
  }

  p {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #fff;
  }
`
export const ImageContainer = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50px;
`
export const PriceContainer = styled.div`
  display: flex;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #ed832f;
  margin: 1vw 0;

  @media (max-width: 767px) {
    margin-top: 10px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    margin-top: 10px;
  }
`
export const FeaturesContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: left;
  //styleName: Title 1 (Semibold);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #fff;
  margin-top: 1vw;

  @media (max-width: 767px) {
    margin-top: 20px;
    gap: 16px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    margin-top: 20px;
    gap: 16px;
  }
`
export const BoxImage = styled.div`
  display: flex;
  width: 20px;
  height: 35px;
  border-radius: 5px;
  background: #fb674b;
`

export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 2vw;
  gap: 1vw;

  @media (max-width: 767px) {
    margin-top: 10px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    margin-top: 10px;
  }
`
export const RowContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
`

export const DescriptionTextContainer = styled.div`
  display: flex;
  gap: 10px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #64718c;
  span {
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
  }
  @media (max-width: 767px) {
    padding-top: 16px;
    font-size: 16px;
    span {
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 16px;
    span {
      font-size: 16px;
    }
  }
`
