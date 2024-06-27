import styled from 'styled-components'
import HammerImage from 'assets/images/images/hammer-image.png'
import BitcoinImage from 'assets/images/images/bit-coin-image.png'
import Card from 'assets/images/images/card.png'
import Dollar from 'assets/images/images/dollar.png'

export const MiningAccountContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 32px;
  // flex-shrink: 0;
  padding: 5vw 0;
  background: radial-gradient(
    84.49% 74.54% at 8.26% 84.45%,
    #692f1b 0%,
    #000513 100%
  );

  backdrop-filter: blur(8px);
  @media (max-width: 767px) {
    padding: 80px 16px 0 16px;
    background: #000513;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    background: #000513;
  }
`
export const MiningAccountContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
  max-width: 1100px;
  position: relative;

  border-radius: 40px;
  border: 1px solid #343d62;
  background: linear-gradient(232deg, #030616 28.21%, #15162b 83.27%);

  padding: 80px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 113px 30px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 91%;
  }
`
export const ImageContainer = styled.div`
  > *:first-child {
    position: absolute;
    left: 1%;
    top: 68%;
    // width: 150px;
    // height: 150px;
    width: 136px;
    height: 120px;
    background-image: url(${Card.src});
    background-size: cover;
    background-repeat: no-repeat;
  }

  > *:nth-child(2) {
    position: absolute;
    right: 1%;
    top: 4%;
    background-image: url(${Dollar.src});
    background-size: cover;
    background-repeat: no-repeat;
    width: 106px;
    height: 100px;
  }
  @media (max-width: 767px) {
    > *:first-child {
      left: 2%;
      top: 74%;
      background-image: url(${HammerImage.src});
      background-size: cover;
      background-repeat: no-repeat;
      width: 136px;
      height: 120px;
    }
    > *:nth-child(2) {
      right: 5%;
      background-image: url(${BitcoinImage.src});
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    > *:first-child {
      left: 3%;
      top: 71%;
      width: 136px;
      height: 120px;
      background-image: url(${HammerImage.src});
      background-size: cover;
      background-repeat: no-repeat;
    }
    > *:nth-child(2) {
      right: 4%;
      top: 6%;
      width: 106px;
      height: 100px;
      background-image: url(${BitcoinImage.src});
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
`
export const MiningAccountHeader = styled.div`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 129.7%; /* 51.88px */
  text-transform: capitalize;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;

  img {
    height: 48px;
    width: 48px;
    transform: translateY(11px);
  }
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 152.7%;
    width: 100%;
  }
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 152.7%;
    width: 100%;
  }
`

export const ButtonContainer = styled.div`
  width: 200px;
  @media (max-width: 767px) {
    width: 151px;
  }
  @media (max-width: 767px) {
    width: 151px;
  }
`
