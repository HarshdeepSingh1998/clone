import styled from 'styled-components'

export const Options = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;
  &.tabs {
    justify-content: center;
  }
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
  @media only screen and (min-width: 360px) {
    padding-bottom: 15px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  min-height: 40px;
  width: 230px;
  padding: 6px;
  border: 1px solid #161929;
  background: #090b1d;
  gap: 8px;
  border-radius: 68px;

  .active {
    background: #fb674b;
    color: #fafafa;
  }
  @media (max-width: 767px) {
    width: 100%;
    max-width: 310px;
    /* gap: 42px; */
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 100%;
    max-width: 345px;
    &.button {
      width: 230px;
    }
  }
`
export const ButtonContent = styled.button`
  height: 30px;
  border-radius: 72px;
  width: 116px;
  border: none;
  background: none;
  transition: background 0.3s ease;
  color: #64718c;
  font-family: Inter;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
`
