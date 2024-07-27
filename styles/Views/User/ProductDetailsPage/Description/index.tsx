import styled from 'styled-components'

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
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
export const DescriptionContent = styled.div`
  display: flex;
  margin-top: 1vw;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;
  color: #fff;

  word-break: break-all;
  @media (max-width: 767px) {
    padding-top: 16px;
    padding-bottom: 10px;
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
export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`
