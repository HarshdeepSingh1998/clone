import Image from 'next/image'
import { StoryRoadmapType } from 'components/StoryRoadmapCard/types'
import AboutPageFan from '@/assets/images/svg/AboutPageFan'
import TabFan from '@/assets/images/svg/TabFan'
import {
  StoryRoadmap,
  AnimationFan,
  StoryDescriptionContainer,
  StoryDescription
} from '@/styles/Components/StoryRoadmapCard'

const StoryRoadmapCard = ({ data, i, screenType }: StoryRoadmapType) => {
  return (
    <StoryRoadmap index={i} screenType={screenType}>
      <AnimationFan screenType={screenType} index={i}>
        {screenType === 'desktop' && <AboutPageFan />}
        {screenType === 'tab' && <TabFan />}
      </AnimationFan>
      <StoryDescriptionContainer index={i} screenType={screenType}>
        <Image
          src={i === 1 ? data.leftIndicator : data.rightIndicator}
          alt="indicator"
        />
        <StoryDescription index={i} screenType={screenType}>
          {data.text}
          <span>{data.description}</span>
        </StoryDescription>
      </StoryDescriptionContainer>
    </StoryRoadmap>
  )
}

export default StoryRoadmapCard
