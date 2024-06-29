import styled from 'styled-components'

export const StoryRoadmap = styled.div<{ index: number; screenType: string }>`
  display: flex;
  align-items: center;
  align-self: ${({ index }) =>
    index === 0 || index === 2 ? 'flex-end' : 'start'};
  flex-direction: ${({ index }) => (index === 1 ? 'row-reverse' : 'row')};
  width: ${({ index }) => (index === 1 ? '63%' : '65%')};
  width: ${({ screenType }) => screenType === 'tab' && '100%'};
  transform: ${({ screenType, index }) =>
    screenType === 'tab' && (index === 0 || index === 2) && 'translateX(55px)'};
  transform: ${({ screenType, index }) =>
    screenType === 'tab' && index === 1 && 'translateX(-124px)'};
`

export const AnimationFan = styled.div<{ screenType: string; index: number }>`
  flex: ${({ screenType }) => screenType === 'tab' && '1'};
  text-align: ${({ screenType }) => screenType === 'tab' && 'end'};
  text-align: ${({ screenType, index }) =>
    screenType === 'tab' && index === 1 && 'start'};
  svg {
    animation: rotateAnimation 2s linear infinite;

    @keyframes rotateAnimation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`
export const StoryDescriptionContainer = styled.div<{
  index: number
  screenType: string
}>`
  flex: ${({ screenType }) => screenType === 'tab' && '1'};
  display: flex;
  flex-direction: ${({ index }) => (index === 1 ? 'row-reverse' : 'row')};
  width: ${({ screenType }) => screenType === 'tab' && '170px'};
`
export const StoryDescription = styled.div<{
  index: number
  screenType: string
}>`
  display: flex;
  flex-direction: column;
  color: ${({ index }) => (index === 2 ? 'rgb(251, 103, 75)' : 'rgb(100, 113, 140)')};
  align-items: flex-start;
  font-feature-settings:
    'clig' 0,
    'liga' 0;
  font-family: Inter;

  font-size: ${({ screenType }) => (screenType === 'tab' ? '34px' : '48px')};

  width: ${({ screenType }) => screenType === 'tab' && '170px'};

  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-items: ${({ index }) => (index === 1 ? 'end' : '')};
  gap: 16px;
  span {
    color:  var(--Neutral-20, #f1f4f9);
    text-align: left;
    font-feature-settings:
      'clig' 0,
      'liga' 0;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    max-width: 270px;
    line-height: 22px;
    text-align: ${({ index }) => (index === 1 ? 'end' : '')};
  }
`
