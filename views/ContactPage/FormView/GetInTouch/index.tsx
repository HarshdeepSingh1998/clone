import useScreenType from '@/utils/Customhooks/useScreenType'
import MobileCallIcon from '@/assets/images/svg/MobileCallIcon'
import MobileEmailIcon from '@/assets/images/svg/MobileEmailIcon'
import Call from '@/assets/images/svg/Call'
import Email from '@/assets/images/svg/email'
import {
  GetInTouchContainer,
  GetInTouchCallContainer,
  GetInTouchEmailContainer
} from '@/styles/Views/ContactPage/Form/GetInTouch'

const GetInTouch = () => {
  const { screenType } = useScreenType()
  return (
    <GetInTouchContainer>
      <GetInTouchCallContainer>
        {screenType === 'mobile' ? <MobileCallIcon /> : <Call />}
        <div>
          Phone<span>+1 (623) 336-9099</span>
        </div>
      </GetInTouchCallContainer>
      <GetInTouchEmailContainer>
        {screenType === 'mobile' ? <MobileEmailIcon /> : <Email />}
        <div>
          Email<span>info@basicmining.com</span>
        </div>
      </GetInTouchEmailContainer>
    </GetInTouchContainer>
  )
}

export default GetInTouch
