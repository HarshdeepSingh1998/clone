import Indicator from '@/assets/images/svg/RighFanSvg'
import TabFan from '@/assets/images/svg/TabFan'
import {
  StoryRoadmap,
  AnimationFan,
  StoryDescriptionContainer,
  StoryDescription
} from '@/styles/Components/StoryRoadmapCard/Mobile'
import { StoryRoadmapType } from 'components/StoryRoadmapCard/types'

const StoryRoadmapMobileCard = ({ data, i, screenType }: StoryRoadmapType) => {
  return (
    <StoryRoadmap key={i} screenType={screenType}>
      <AnimationFan>
        <TabFan />
      </AnimationFan>
      <StoryDescriptionContainer>
        <Indicator />
        <StoryDescription>
          {data.text}
          <span>{data.description}</span>
        </StoryDescription>
      </StoryDescriptionContainer>
    </StoryRoadmap>
  )
}

export default StoryRoadmapMobileCard
