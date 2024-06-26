import useScreenType from '@/utils/Customhooks/useScreenType'
import Fan from '@/assets/images/svg/Fan'
import TabFan from '@/assets/images/svg/TabFan'
import { FanAnimationContainer } from 'styles/Components/FanAnimation'

const FanAnimation = () => {
  const { screenType } = useScreenType()

  return (
    <FanAnimationContainer>
      {screenType === 'mobile' || screenType === 'tab' ? <TabFan /> : <Fan />}
    </FanAnimationContainer>
  )
}

export default FanAnimation
