import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  background: linear-gradient(rgb(3, 6, 22) 0%, rgb(22, 23, 45) 100%);

  flex-direction: column;
  border-radius: 20px;
  padding: 40px;
  width: 602px;

  @media (max-width: 767px) {
    width: 365px;
    padding: 20px;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  // justify-content: center;
  justify-content: center;
  //styleName: Title 1 (Semibold);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #fff;

  span {
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #a9acb4;
  }

  margin-bottom: 1vw;
  @media (max-width: 767px) {
    padding-bottom: 30px;
  }
`
export const DescriptionContainer = styled.div`
  color: #707c96;
  font-weight: 600;
  line-height: 40px;
  font-family: Inter;
  padding-left: 14.5px;
  text-align: center;
  font-size: 32px;
  @media (max-width: 375px) {
    line-height: 32px;
    font-size: 30px;
    font-weight: unset;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1.5vw;

  gap: 10px;
  button {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 767px) {
    padding-top: 20px;
    &.mobile-responsive {
      padding-top: unset;
    }
  }
`
