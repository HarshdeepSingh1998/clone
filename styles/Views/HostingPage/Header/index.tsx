import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  padding: 5vw 0;
  padding-bottom: 0;
  margin: auto;
  background: radial-gradient(
    79.14% 79.14% at 50% 49.86%,
    rgb(81, 39, 9) 3.82%,
    rgb(0, 5, 19) 53.58%
  );
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const TitleContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto;
  max-width: 874px;
  padding: 5vw 0;
  padding-bottom: 0;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  @media (max-width: 767px) {
    width: 83%;
  }

  color: #fff;
  text-align: center;
  font-family: Ubuntu;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 78px; /* 139.286% */
  letter-spacing: -1.68px;
  span {
    color: rgb(251, 103, 75);
    font-family: Ubuntu;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 78px;
    letter-spacing: -1.68px;
  }
  p {
    color: rgb(255, 255, 255);
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.1px;
    @media (max-width: 767px) {
      font-size: 16px;
      padding: 16px;
    }
  }
  @media (max-width: 767px) {
    font-size: 38px;
    line-height: 48px;
    padding: 25vw 0 2vh 0;
    span {
      font-size: 38px;
      line-height: 60px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 38px;
    line-height: 48px;
    padding: 10vw 0 28px 0;
    span {
      font-size: 38px;
      line-height: 60px;
    }
    padding-bottom: 0;
  }
`
