import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 285px;
  min-height: 100vh;
  justify-content: space-between;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 2vw 1vw;
  background: linear-gradient(180deg, #040717 1.55%, #121328 100%);
  @media (max-width: 767px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    display: none;
  }
`
export const LogoContainer = styled.div`
  margin-left: 50px;
`
export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  gap: 10px;
`
export const ItemContainer = styled.div<{
  isSelected?: boolean
}>`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px 0 12px 20px;
  cursor: pointer;
  background-color: ${props => (props.isSelected ? '#FB674B' : 'transparent')};
  color: ${props => (props.isSelected ? '#fff' : '#64718C')};
  border-radius: 62px;
  margin-top: 8px;
  height: 48px;
  svg {
    width: 100%;
    max-width: 25px;
    fill: ${props => (props.isSelected ? '#fff' : '#64718C')};
  }

  &:hover {
    color: ${props => (props.isSelected ? '#fff' : '#64718C')};
    background-color: ${props => (props.isSelected ? '#FB674B' : '#4f4d563d')};
    height: 48px;
    margin-top: ${props => (props.isSelected ? '0px' : '8px')};
    margin-bottom: ${props => (props.isSelected ? '0px' : '8px')};
    margin-top: 8px;
    svg {
      fill: ${props => (props.isSelected ? '#fff' : '#64718C')};
    }
    .fillSvgClass {
      path {
        fill: ${props => (props.isSelected ? '#fff' : '#64718C')};
      }
    }
  }
`
export const TextContainer = styled.div<{
  isSelected?: boolean
}>`
  width: 100%;
  font-family: Inter;
  font-size: 15px;
  font-weight: 600;
  margin-top: 1px;
  &:hover {
    padding: 12px 0 12px 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 20px;
  }
`
