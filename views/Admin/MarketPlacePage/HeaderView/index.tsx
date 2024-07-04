import useAdminMarketPlace from '@/utils/Customhooks/useAdminMarketPlace'
import {
  HeaderContainer,
  TitleContainer,
  ButtonContainer,
  ButtonContent,
  CustomButton
} from '@/styles/Views/Admin/MarketPlacePage/Header'

const HeaderView = () => {
  const { toggleActive, handleBuyAndHostClick, handleShopClick } =
    useAdminMarketPlace()
  return (
    <HeaderContainer>
      <TitleContainer>Marketplace</TitleContainer>

      <ButtonContainer>
        <ButtonContent>
          <CustomButton
            className={toggleActive === '1' ? 'active' : ''}
            onClick={handleBuyAndHostClick}
            disabled={toggleActive === '1'}
          >
            Buy & Host
          </CustomButton>
          <CustomButton
            className={toggleActive === '2' ? 'active' : ''}
            onClick={handleShopClick}
            disabled={toggleActive === '2'}
          >
            Shop
          </CustomButton>
        </ButtonContent>
      </ButtonContainer>
    </HeaderContainer>
  )
}

export default HeaderView
