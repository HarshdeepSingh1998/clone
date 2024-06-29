import useScreenType from '@/utils/Customhooks/useScreenType'
import FanAnimation from '@/components/FanAnimation'
import {
  FanContainer,
  HeaderContainer,
  TitleContainer
} from '@/styles/Views/MarketPlacePage/Header'

const HeaderView = () => {
  const { screenType } = useScreenType()

  return (
    <HeaderContainer>
      <FanContainer>
        {screenType === 'mobile' ? '' : <FanAnimation />}
        <FanAnimation />
      </FanContainer>
      <TitleContainer>
        <div>
          ASIC
          <span>Marketplace</span>
        </div>
      </TitleContainer>
    </HeaderContainer>
  )
}

export default HeaderView
