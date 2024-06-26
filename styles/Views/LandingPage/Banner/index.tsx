import styled from 'styled-components'

export const BannerContentContainer = styled.div`
  width: 100%;
  display: flex;

  padding: 8vw 0 2vw 10vw;

  background: radial-gradient(
    80.91% 50.5% at 72.81% 32%,
    #4a1207 0%,
    #000513 100%
  );

  @media (max-width: 767px) {
    padding: 34vw 0 40px 0;
    flex-direction: column;
  }

  // backdrop-filter: blur(8px);
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: 12vw 0 2vw 7vw;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  justify-content: center;
  flex: 1;

  @media (max-width: 767px) {
    align-items: center;
  }
`
// export const TitleContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 13px;
// `
export const Title = styled.div`
  font-family: Ubuntu;
  font-size: 68px;
  font-weight: 700;
  line-height: 78px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #fff;
  @media (max-width: 767px) {
    font-size: 38px;
    line-height: 48px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 38px;
    line-height: 48px;
    // max-width: 344px;
  }
`
export const StartEarningText = styled.span``
export const BitcoinText = styled.span`
  background: linear-gradient(to right, #fb664b, #ed832f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const BasicText = styled.span``

export const MiningText = styled.span`
  background: linear-gradient(to right, #fb664b, #ed832f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const SubTitle = styled.div`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #fff;
  max-width: 600px;
  @media (max-width: 767px) {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
  }
`
export const ButtonContainer = styled.span`
  display: flex;
`
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 767px) {
    gap: 12px;
    justify-content: center;
  }

  @media (max-width: 767px) {
    gap: 12px;
    justify-content: center;
  }
`
export const ButtonStyle = styled.span`
  button {
    display: flex;
    width: 214px;
    height: 56px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
    font-size: 16px;
  }
  @media (max-width: 767px) {
    button {
      width: 166px;
      height: 44px;
      padding: 0px;
    }
  }
  @media (max-width: 767px) {
    button {
      width: 166px;
      height: 44px;
      padding: 0px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    button {
      width: unset;
      font-size: 14px;
      font-size: 13px;
      font-weight: 100;
    }
  }
`
export const ButtonPricingStyle = styled(ButtonStyle)`
  button {
    background-color: #ffffff1e;
    width: 160px;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  @media (max-width: 767px) {
    margin-top: 24px;
  }
  // @media only screen and (min-width: 768px) and (max-width: 1224px) {
  //   // padding-right: 86px;
  // }
`
export const UpperFanWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const BottomFanWrapper = styled.div`
  display: flex;
  gap: 12px;

  justify-content: center;

  @media (max-width: 767px) {
    justify-content: center;
  }

  @media (max-width: 767px) {
    justify-content: center;
  }
`
// export const BannerContent = styled.div`
//   display: flex;
//   margin: auto;
//   padding-left: 10vw;
//   width: 100%;
//   flex-direction: row;
//   align-items: center;

//   @media screen and (min-width: 1920px) {
//     padding-left: 10vw;
//     width: 100%;
//   }
//   @media (max-width: 767px) {
//     display: unset;
//     padding: 0 16px 0 16px;
//   }
//   @media only screen and (min-width: 768px) and (max-width: 1224px) {
//     padding-left: 7vw;
//   }
// `
// export const TextContainer = styled.div`
//   font-family: Ubuntu;
//   font-size: 68px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 75px;
//   // text-transform: capitalize;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   max-width: 674px;

//   @media (max-width: 767px) {
//     font-size: 38px;
//     line-height: 48px;
//   }
//   @media only screen and (min-width: 768px) and (max-width: 1224px) {
//     font-size: 38px;
//     line-height: 48px;
//     max-width: 344px;
//   }
// `
// export const HeadingContentContainer = styled.div`
//   display: flex;
//   // width: 35%;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 13px;
//   // margin: 7% 13%;
// `
