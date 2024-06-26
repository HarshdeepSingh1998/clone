import styled from 'styled-components'

export const ServiceCardDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  // align-items: center;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid #1b202b;
  background: linear-gradient(180deg, #020615 0%, #17182e 100%);
  width: 100%;
  // max-width: 386px;
`
export const ServiceCardContent = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 260px;
  }
`
export const ServiceCardImageContainer = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    height: 184px;
  }
  svg {
    width: 89%;
    height: 80%;
  }
`
export const ServiceCardTableContent = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  // max-width: 340px;
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    gap: 8px;
  }
  p {
    color: #7782ff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 129.7%; /* 23.346px */
    text-transform: capitalize;
  }
`
export const ServiceCardTitleContainer = styled.div`
  color: #ffffff;
  font-family: Ubuntu;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding: 10px;
  text-align: center;
  height: 30px;
  align-items: center;
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 20px;
  }
`
export const ServiceCardParaContainer = styled.div`
  color: #64718c;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 12px;
    line-height: 18px;
  }
`
