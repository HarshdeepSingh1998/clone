import styled from 'styled-components'

export const StoryContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 60px;

  align-items: flex-start;
  flex-direction: column;
  background: radial-gradient(
    64.48% 49.31% at 16.11% 50.25%,
    #622c1a 0%,
    #000513 100%
  );
`
export const StoryContent = styled.div<{ screenType: string }>`
  display: flex;
  // width: 80%;
  width: ${({ screenType }) =>
    screenType === 'tab' || screenType === 'mobile' ? '97%' : '80%'};

  margin: auto;
  padding: 5vw 0;
  flex-direction: column;
  gap: 40px;
  max-width: 1670px;
`
export const StoryHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  /* Targeting the first span child */
  span:first-child {
    color: var(--Primary-0, #fff);
    text-align: center;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 129.7%; /* 46.692px */
    text-transform: capitalize;
  }

  @media (max-width: 767px) {
    span:first-child {
      font-size: 31px;
    }
  }
`
export const StoryRoadmap = styled.div<{ screenType: string }>`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  display: flex;
  // padding: 39px 68px;
  padding: ${({ screenType }) =>
    screenType === 'tab' || screenType === 'mobile' ? '39px 0px' : '39px 68px'};

  flex-direction: column;
  // align-items: flex-start;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid #1b202b;
  background: linear-gradient(191deg, #030616 13.05%, #15162b 95.27%);

  @media (max-width: 767px) {
    gap: 30px;
    padding: 39px 75px;
  }
`
