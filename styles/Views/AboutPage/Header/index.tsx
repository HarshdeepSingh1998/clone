import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 60px;
  padding: 5vw 0;
  margin: auto;
  background: radial-gradient(
    64.48% 49.31% at 16.11% 21.25%,
    #622c1a 0%,
    #000513 100%
  );
`
export const AboutPageTitle = styled.div`
  width: 70%;
  /* background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3169642857142857) 31%, rgba(237,131,47,0.14609593837535018) 49%, rgba(0,0,0,0.32) 76%, rgba(0,0,0,0.4962359943977591) 100%); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: relative;
  margin: auto;
  max-width: 675px;

  @media (max-width: 767px) {
    width: 83%;
  }
  padding: 5vw 0;
  display: flex;
  //   flex-direction: column;
  align-items: flex-start;
  gap: 19px;
  color: #fff;
  text-align: center;
  font-family: Ubuntu;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 78px; /* 139.286% */
  letter-spacing: -1.68px;
  span {
    background: linear-gradient(93deg, #ed832f 44.84%, #fb674b 94.97%);
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
  }
`
