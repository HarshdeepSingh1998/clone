import styled from 'styled-components'

export const TextContainer = styled.div`
  color: #90a3bf;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
  padding-bottom: 10px;
`
export const TextBoxStyle = styled.textarea`
  min-height: 151px;
  border-radius: 12px;
  border: 1px solid #323a4b;
  background: #222836;
  color: #ffffff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  padding: 20px;
  resize: vertical;
  @media (max-width: 767px) {
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
