import styled from 'styled-components'

export const HostingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vw;
`
export const TitleContainer = styled.div`
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
export const DescriptionContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`
export const TextContainer = styled.div`
  display: flex;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #64718c;
  gap: 10px;
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
