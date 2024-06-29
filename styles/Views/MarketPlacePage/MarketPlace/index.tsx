import styled from 'styled-components'

export const MarketPlaceContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: auto;
  padding: 0px 0 26px 0;
  width: 100%;
  text-align: center;
  font-family: Ubuntu;
  font-size: 128px;
  font-style: normal;
  font-weight: 700;
  line-height: 78px;
  background: radial-gradient(
    35.91% 64.5% at 36.81% 38.95%,
    #38180d -430%,
    #000513 100%
  );
  @media (max-width: 767px) {
    gap: 32px;
  }
`
