import styled from '@emotion/styled'

export const ActionButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  button {
    height: 40px;
    border: 1px solid #fb674b;
    padding: 0;
    font-family: Inter;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #fb674b;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const ActionButtonContent = styled.div<{ disabled?: boolean }>`
  // border: 1px solid #161929;
  // border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  // @media only screen and (min-width: 768px) and (max-width: 1224px) {
  //   width: 45px;
  // }
`

export const CheckboxContainer = styled.div<{ publishModal?: boolean }>`
  display: flex;
  cursor: pointer;
  gap: 19px;
  align-items: center;

  font-family: Inter;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #64718c;
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
    // width: 22px;
    // height: 22px;
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
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    gap: 12px;
  }
`
