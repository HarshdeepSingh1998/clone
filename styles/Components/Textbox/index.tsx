import styled from 'styled-components'

export const TextContainer = styled.div`
  color: #90a3bf;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
`
export const TextBoxStyle = styled.textarea`
  min-height: 151px;
  border-radius: 12px;
  border: 1px solid #323a4b;
  background: #222836;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  padding: 20px;
  resize: vertical;
  outline: none;
  color: #fff;
  &:focus {
    border: 1px solid #fb674b;
    caret-color: #fb674b;
  }
  &::placeholder {
    color: #6f767e !important;
    font-family: Inter, sans-serif;
    //styleName: Base 2;

    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-align: left;
  }
  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #6f767e;
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
