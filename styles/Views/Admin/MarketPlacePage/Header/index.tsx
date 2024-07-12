import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 767px) {
    gap: unset;
  }
`
export const TitleContainer = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  text-transform: capitalize;
  @media (min-width: 768px) {
    padding: 16px;
  }
  @media (max-width: 767px) {
    font-size: 32px;
    /* padding: 24px 0px 20px 0px; */
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 35px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  &.tabs {
    justify-content: center;
  }
  @media (max-width: 767px) {
    display: flex;
  }
`
export const ButtonContent = styled.div`
  display: flex;
  min-height: 40px;
  width: 230px;
  padding: 6px;
  border: 1px solid #161929;
  background: #090b1d;
  gap: 8px;
  border-radius: 68px;
  .active {
    background: #fb674b;
    color: #fafafa;
  }
  @media (max-width: 767px) {
    width: 100%;
    max-width: 310px;
    /* gap: 42px; */
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 100%;
    max-width: 345px;
  }
`
export const CustomButton = styled.button`
  height: 30px;
  border-radius: 72px;
  width: 116px;
  border: none;
  background: none;
  transition: background 0.3s ease;
  color: #64718c;
  font-family: Inter;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 161px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 161px;
    height: 35px;
  }
`
