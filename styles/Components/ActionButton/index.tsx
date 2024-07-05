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
  width: 60px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 45px;
  }
`
