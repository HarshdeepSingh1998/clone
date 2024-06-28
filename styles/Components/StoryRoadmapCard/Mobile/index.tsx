import styled from 'styled-components'

export const StoryRoadmap = styled.div<{ screenType: string }>`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const AnimationFan = styled.div`
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
export const StoryDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    transform: rotate(-90deg);
  }
`
export const StoryDescription = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(100, 113, 140);
  align-items: flex-start;
  font-feature-settings:
    'clig' 0,
    'liga' 0;
  font-family: Inter;
  margin-top: 15px;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 34px;
  gap: 16px;
  span {
    color: var(--Neutral-20, #f1f4f9);
    text-align: center;
    font-feature-settings:
      'clig' 0,
      'liga' 0;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    max-width: 270px;
    line-height: 22px;
  }
`
