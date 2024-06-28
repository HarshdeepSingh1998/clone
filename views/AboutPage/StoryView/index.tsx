import StoryRoadmapCard from '@/components/StoryRoadmapCard'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { storyData } from '@/utils/AboutPageContent/Story'
import {
  StoryContainer,
  StoryContent,
  StoryHeader,
  StoryRoadmap
} from '@/styles/Views/AboutPage/Story'
import StoryRoadmapMobileCard from '@/components/StoryRoadmapCard/Mobile'

const StoryView = () => {
  const { screenType } = useScreenType()
  return (
    <StoryContainer>
      <StoryContent screenType={screenType}>
        <StoryHeader>
          <span>The Basic Roadmap</span>
        </StoryHeader>
        <StoryRoadmap screenType={screenType}>
          {storyData.map((data, i) => (
            <>
              {(screenType === 'desktop' || screenType === 'tab') && (
                <StoryRoadmapCard data={data} i={i} screenType={screenType} />
              )}
              {screenType === 'mobile' && (
                <StoryRoadmapMobileCard
                  data={data}
                  i={i}
                  screenType={screenType}
                />
              )}
            </>
          ))}
        </StoryRoadmap>
      </StoryContent>
    </StoryContainer>
  )
}

export default StoryView
