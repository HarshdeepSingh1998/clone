import styled from 'styled-components'

export const ImageDetailsContainer = styled.div`
  @media (max-width: 767px) {
    display: flex;
  }
`
export const ImageSelectorContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 60px;
  padding: 8px 9px 7px 9px;
  border-radius: 8px;
  border: 1px solid #1c1f30;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? '2px solid #fb674b' : 'none')};

  img {
    width: 48px;
    height: 48px;
    display: flex;
  }
`
export const PreviewImageContainer = styled.div`
  position: absolute;
  left: 22%;
  top: 25px;

  img {
    max-width: 1000px;
    max-height: 1000px;
    border-radius: 10px;
  }
  @media (max-width: 767px) {
    position: unset;
    display: flex;
    /* justify-content: center;
    width: 212px;
    height: 239px; */
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    position: unset;
    display: flex;
    justify-content: center;
    width: 318px;
    height: 322px;
  }
`
