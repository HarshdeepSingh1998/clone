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
  background: linear-gradient(180deg, #030616 0%, #16172d 100%);
  border: 1px solid #323d5c;
  padding: 29px;
  border-radius: 24px;
`
export const ModalContent = styled(SignupBottomWrap)`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const TermsContainer = styled.div`
  gap: 0px;
  opacity: 0px;
  font-family: Ubuntu;
  font-size: 38px;
  font-weight: 500;
  letter-spacing: -0.03em;
  text-align: left;
  color: #fb674b;
  max-height: 350px;
  overflow-y: scroll;
`
export const TermsSubtitleContainer = styled.div`
  gap: 0px;
  opacity: 0px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fff;
  line-height: unset;
  display: flex;
  flex-direction: column;
  gap: 13px;

  p {
    color: #64718c;
  }
  h2 {
    &.term {
      color: #fb674b;
    }
    b {
      &.term {
        color: #fb674b;
      }
    }
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  margin-top: 1vw;
`
export const CheckboxContent = styled.div<{ publishModal?: boolean }>`
  display: flex;
  cursor: pointer;
  gap: 15px;
  align-items: center;
  width: 38%;
  font-family: Inter;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #64718c;
  transform: translateX(2px);
  width: 10%;
  input[type='checkbox'] {
    position: relative;
    cursor: pointer;
  }
  input[type='checkbox']:before {
    content: '';
    display: block;
    position: absolute;
    width: ${props => (props.publishModal ? '22px' : '18px')};
    height: ${props => (props.publishModal ? '22px' : '18px')};
    top: -3px;
    left: -2px;
    border: 2px solid #2a303c;
    border-radius: 7px;
    background: linear-gradient(180deg, #040717 1.55%, #121328 100%);
    transform: ${props => (props.publishModal ? 'translateY(-2px)' : '')};
  }
  input[type='checkbox']:checked:before {
    background: linear-gradient(180deg, #fb674b 1.55%, #fb674b 100%);
  }
  input[type='checkbox']:checked:after {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    // background: #fb674b,
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: ${props => (props.publishModal ? '0px' : '0')};
    // top: 0;
    left: 7px;
    left: ${props => (props.publishModal ? '7px' : '6px')};
  }
  @media (max-width: 767px) {
    gap: 14px;
    width: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 50%;
    gap: 12px;
  }
`
export const ChecboxTextContainer = styled.div`
  gap: 0px;
  opacity: 0px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fff;
`
