import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  @media (max-width: 767px) {
    padding: 0px 16px;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  color: black;
  padding: 24px;
  position: absolute;

  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 767px) {
    top: -10%;
  }
`
export const SignupBottomWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 396px;
  background: linear-gradient(180deg, #030616 0%, #16172d 100%);
  border: 1px solid #323d5c;
  padding: 29px;
  border-radius: 24px;

  &.term-condition {
    max-width: 600px;
  }

  &.signup-wrapper {
    @media screen and (max-width: 1366px) {
      margin-top: 74px !important;
    }
  }
`
export const ModalContent = styled(SignupBottomWrap)`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  // gap: 40px;
`
export const HeaderContainer = styled.div`
  color: #ffffff;
  font-size: 38px;
  font-weight: 500;
  line-height: 48px;
`
export const SubheaderContainer = styled.div`
  font-size: 12px;
  font-weight: 600;
  font-family: Inter;
  color: #ffffff;
  padding: 4px 0 20px 0;
  line-height: 16px;

  &.signup-paragraph {
    padding: 4px 0 9px 0;
  }
`
export const SigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  span {
    line-height: 16px;
    font-size: 12px;
    font-weight: 600;
    font-family: Inter;
    color: #ed832f;
    cursor: pointer;
  }
`
export const TextContainer = styled.div`
  font-size: 12px;
  font-weight: 600;
  font-family: Inter;
  color: #ffffff;
  line-height: 16px;
  span {
    line-height: 16px;
    font-size: 12px;
    font-weight: 600;
    font-family: Inter;
    color: #ed832f;
    cursor: pointer;
  }
`
