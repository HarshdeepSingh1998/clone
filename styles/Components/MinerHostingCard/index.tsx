import styled from 'styled-components'

export const MinerHostingCard = styled.div<{ isSelected: boolean }>`
  display: flex;
  padding: 20px;

  flex-direction: column;
  align-items: flex-start;
  gap: 26px;
  border-radius: 47px;

  border: ${props =>
    props.isSelected
      ? '1.5px solid #fb674b'
      : '1px solid rgba(52, 61, 98, 0.61)'};
  width: 100%;

  background: ${props =>
    props.isSelected
      ? 'linear-gradient(180deg, #030616 0%, #16172d 100%)'
      : 'linear-gradient(180deg, #030617 0%, rgba(22, 23, 45, 0) 100%)'};
`
export const MinerHostingCardHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`
export const MembershipText = styled.div`
  color: rgb(99, 106, 122);
`
export const MinerHostingCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  gap: 5px;

  position: relative;
  span {
    color: var(--Secondary-400, #596780);
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
    text-align: left;
    height: 48px;
  }
`
export const MinerHostingCardImage = styled.div`
  // width: 184px;
  // height: 36px;
  color: #fb624f;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 36px */
  letter-spacing: -0.72px;
  display: flex;
  gap: 5px;
`

export const PopularCard = styled.div`
  border: 1px solid #fb624f;
  padding: 4px 16px 4px 16px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  color: #fb624f;
  //styleName: Medium/Type@16;
  font-family: inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;

  position: absolute;
  right: -8px;
  top: 0;
`
export const MinerHostingTitle = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 48px */
  letter-spacing: -0.96px;

  span {
    color: #fff;
    font-family: Inter;
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.69px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`
export const FeatureSection = styled.div`
  display: flex;
  // flex-direction: column;
  // align-items: flex-start;
  // gap: 24px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`
export const FeatureSectionRow = styled.div<{ isCrossIcon: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  color: ${props => (props.isCrossIcon ? '#292b3d' : '#64718c')};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 129.7%; /* 20.752px */
  text-transform: capitalize;
`
export const ButtonSection = styled.div`
  width: 100%;
  button {
  }
`
