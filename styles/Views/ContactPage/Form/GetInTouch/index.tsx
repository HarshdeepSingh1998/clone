import styled from 'styled-components'

export const GetInTouchContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  min-height: 117px;
  width: 100%;
  @media (max-width: 767px) {
    height: unset;
  }
  svg {
    margin-top: 0 !important;
  }
`
export const GetInTouchCallContainer = styled.div`
  display: flex;
  padding: 14px 18px;
  flex: 1;
  div {
    display: flex;
    flex-direction: column;
  }
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: hsla(0, 0%, 100%, 0.04);
  width: 50%;
  height: 117px;
  max-width: 322px;
  @media (max-width: 767px) {
    height: 88px;
  }

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  color: #ffffff;
  span {
    color: #90a3bf;
    font-size: 16px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    span {
      font-size: 12px;
    }
    line-height: 20px;
  }
  @media (max-width: 398px) {
    span {
      white-space: wrap;
      font-size: 10px;
    }
  }
`
export const GetInTouchEmailContainer = styled.div`
  display: flex;
  padding: 14px 18px;
  flex: 1;
  div {
    display: flex;
    flex-direction: column;
  }
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: hsla(0, 0%, 100%, 0.04);
  width: 50%;
  height: 117px;
  max-width: 322px;
  @media (max-width: 767px) {
    height: 88px;
  }
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  color: #ffffff;
  width: 60%;
  span {
    color: #90a3bf;
    font-size: 16px;

    word-break: break-all;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    // width: unset;
    span {
      font-size: 12px;
    }
    line-height: 20px;
  }
  @media (max-width: 398px) {
    span {
      white-space: wrap;
      font-size: 10px;
    }
  }
`
