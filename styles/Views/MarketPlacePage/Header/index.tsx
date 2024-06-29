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
    35.91% 64.5% at 36.81% 38.95%,
    #38180d 0%,
    #000513 100%
  );

  @media (max-width: 767px) {
    flex-direction: column;
  }
`
export const FanContainer = styled.div`
  @media (max-width: 767px) {
    padding: 25vw 0 2vh 0;

    text-align: center;
    width: 100%;
  }

  div:nth-of-type(1) {
    position: absolute;
    left: 0;
    top: 30%;
    z-index: 1;
    @media (max-width: 767px) {
      position: unset;
    }
  }

  div:nth-of-type(2) {
    position: absolute;
    right: 0;
    top: 30%;
    z-index: 1;
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      z-index: 1;
      top: 81%;
    }
  }
`

export const TitleContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: relative;
  margin: auto;
  max-width: 675px;

  div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    width: 83%;
  }
  padding: 5vw 0;
  padding-bottom: 0

  gap: 19px;
  background: linear-gradient(
      93deg,
      rgb(237, 131, 47) 13.86%,
      rgb(251, 103, 75) 33.4%
    )
    text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: Ubuntu;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 78px; /* 139.286% */
  letter-spacing: -1.68px;
  span {
    background: linear-gradient(93deg, #fff 44.84%, #fff 94.97%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Ubuntu;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 78px;
    letter-spacing: -1.68px;
  }
  @media (max-width: 767px) {
    font-size: 38px;
    line-height: 48px;
    padding: 0;
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
        padding-bottom: 0
  }
`
