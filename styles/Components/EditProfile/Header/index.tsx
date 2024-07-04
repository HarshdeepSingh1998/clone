import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  // gap: 120px;
  justify-content: space-between;
  span {
    cursor: pointer;
    transform: translateX(-5px);
  }
`
export const HeaderContent = styled.div`
  width: unset;
  gap: 16px;
  display: flex;
  max-width: 501px;
  gap: 24px;
  justify-content: center;
  align-items: center;
`
export const BoxImage = styled.div`
  width: 16px;
  height: 32px;
  border-radius: 4px;
  background: #fb674b;
`
export const TextContainer = styled.div`
  //styleName: Title 1 (Semibold);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #fcfcfc;
`
