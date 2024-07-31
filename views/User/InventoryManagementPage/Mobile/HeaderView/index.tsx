import Button from '@/components/Button'
import Loader from '@/components/Loader'
import { UserInventoryDataInterface } from 'views/User/InventoryManagementPage/Mobile/types'
import {
  HeaderContainer,
  TitleContainer,
  ButtonContainer,
  PrimaryButttonContainer
} from '@/styles/Views/User/InventoryManagementPage/Mobile/Header'

const HeaderView = ({
  inventoryData
}: {
  inventoryData: UserInventoryDataInterface
}) => {
  return (
    <HeaderContainer>
      <TitleContainer>My Assets Inventory</TitleContainer>
      <ButtonContainer>
        {inventoryData.selectedProductIds?.length >= 2 && (
          <PrimaryButttonContainer onClick={inventoryData.handleLotModalClick}>
            <Button type="button" variant="contained" label={''}>
              Create A Lot
            </Button>
          </PrimaryButttonContainer>
        )}
      </ButtonContainer>
      {!inventoryData?.data && (
        <Loader blurredBackgroundtrue={!inventoryData?.data} />
      )}
    </HeaderContainer>
  )
}

export default HeaderView
