import { useState } from 'react'
import { videoSources } from '@/utils/Data/Video'
import Loader from '@/components/Loader'
import {
  HeaderContainer,
  TitleContainer,
  VideoContainer,
  VideoContent,
  IframeContainer,
  StyledIframe
} from '@/styles/Views/User/ResourceManagementPage/Header'

const HeaderView = () => {
  const [currentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <HeaderContainer>
      {isLoading && <Loader blurredBackgroundtrue={isLoading} />}
      <TitleContainer>
        Demo <span>Video</span>
      </TitleContainer>
      <VideoContainer>
        <VideoContent>
          <IframeContainer>
            <StyledIframe
              src={videoSources[currentIndex]}
              allowFullScreen={true}
              style={{
                width: '100%',
                borderRadius: '10px'
              }}
              onLoad={handleIframeLoad}
            />
          </IframeContainer>
        </VideoContent>
      </VideoContainer>
    </HeaderContainer>
  )
}

export default HeaderView
