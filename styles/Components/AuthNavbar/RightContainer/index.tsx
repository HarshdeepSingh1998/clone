import styled from 'styled-components'

export const RightContent = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  // align-items: center;
  height: 45px;
  @media (max-width: 767px) {
    display: flex;
    gap: 10px;
  }
`

export const IconContainer = styled.div`
  display: flex;
  @media (max-width: 767px) {
    display: flex;
    justify-content: flex-start;
    gap: 5.278vw;
  }
`
export const IconContent = styled.div`
  display: flex;
  cursor: pointer;
  @media (max-width: 767px) {
    display: inline-flex;
    align-items: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    svg {
      margin-top: 5px;
    }
  }
`
