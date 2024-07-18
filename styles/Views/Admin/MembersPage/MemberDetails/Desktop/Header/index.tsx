import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 18px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    gap: unset;
    flex-direction: column;
    font-size: 32px;
    margin: 0px;
    align-items: center;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  //   flex-direction: column;
  //styleName: H3;
  font-family: Inter;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #efefef;
  @media (min-width: 360px) {
    padding: 16px;
  }
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    font-size: 32px;
    margin: 0px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 35px;
    margin: 0px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  button {
    height: 40px;
    width: 160px;
    color: #fff;
    border: none;
    padding: unset;
    @media (max-width: 767px) {
      width: 167px;
      padding: unset;
    }
  }
  svg {
    margin: 4px 5px 0 0;
  }
`
