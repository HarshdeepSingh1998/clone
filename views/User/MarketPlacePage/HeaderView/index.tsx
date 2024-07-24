import { MarketPlaceDataInterface } from 'views/User/MarketPlacePage/types'
import Switch from '@/components/Switch'
import {
  HeaderContainer,
  TitleContainer,
  ButtonContainer,
  ButtonContent,
  CustomButton
} from '@/styles/Views/User/MarketPlacePage/Header'

const HeaderView = ({
  marketplaceData
}: {
  marketplaceData: MarketPlaceDataInterface
}) => {
  return (
    <HeaderContainer>
      <TitleContainer>Marketplace</TitleContainer>

      <ButtonContainer>
        <ButtonContent>
          <CustomButton
            className={marketplaceData.toggleActive === '1' ? 'active' : ''}
            onClick={marketplaceData.handleBuyAndHostClick}
            disabled={marketplaceData.toggleActive === '1'}
          >
            Buy & Host
          </CustomButton>
          <CustomButton
            className={marketplaceData.toggleActive === '2' ? 'active' : ''}
            onClick={marketplaceData.handleShopClick}
            disabled={marketplaceData.toggleActive === '2'}
          >
            Shop
          </CustomButton>
        </ButtonContent>
        <Switch
          marketplaceData={marketplaceData}
          className="switch"
          startvalue="My Owned"
          endvalue=""
        />
      </ButtonContainer>
    </HeaderContainer>
  )
}

export default HeaderView
