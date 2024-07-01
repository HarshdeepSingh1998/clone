import styled from 'styled-components'

export const InputContent = styled.div`
  width: 100%;
  position: relative;
  @media (max-width: 767px) {
    padding: 0px 0px 12px 0px;
  }

  ::placeholder {
    color: #64718c;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    /* padding: 10px; */
  }
  .css-166bipr-Input {
    color: #fff !important;
  }
  .rsw-toolbar {
    height: 48px;
    background: none;
    border: none;
  }
  .rsw-btn:hover {
    background-color: #2c304f;
  }
  .rsw-btn {
    color: #64718c;
    font-size: 25px;

    svg {
      width: 32px !important;
    }
  }
  .rsw-btn[data-active='true'] {
    background: none !important;
  }
  .rsw-editor {
    border: 1px solid #9a9fa53f;
  }
  .rsw-ce {
    height: 112px;
    background-color: #0e1023;
    color: #fff;
    padding-left: 10px;
  }
`
export const InputText = styled.div`
  color: #90a3bf;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  // padding: 5px 0;
  text-transform: capitalize;
`

export const StyledInput = styled.input<{
  maxwidth?: string
  border?: string
  disabled?: boolean
}>`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 48px;
  max-width: ${({ maxwidth }) => maxwidth};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: #ffffff14;
  padding-left: 20px;
  border: ${({ border }) => border};
  border-radius: 12px;
  color: ${({ disabled }) => (disabled ? '#64718C' : '#fff')};
  // color: #fff;
  outline: none;
  &:focus {
    border: 1px solid #fb674b;
    caret-color: #fb674b;
  }
  ::placeholder {
    color: #6f767e;
    font-family: Inter;
    //styleName: Base 2;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-align: left;
  }
  @media (max-width: 800px) {
    max-width: 100%;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const ErrorMessageContainer = styled.div`
  width: 100%;
  font-size: 13.5px;
  color: #ed832f;
  padding-top: 10px;
  margin-left: 6px;
  padding-top: 5px;
`