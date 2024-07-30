import { useRouter } from 'next/router'
import Button from '@/components/Button'
import { UserInventoryDataInterface } from 'views/User/InventoryManagementPage/Desktop/types'
import {
  HeaderContainer,
  TitleContainer,
  ButtonContainer,
  PrimaryButttonContainer
} from '@/styles/Views/User/InventoryManagementPage/Desktop/Header'
import Loader from '@/components/Loader'

const HeaderView = ({
  inventoryData
}: {
  inventoryData: UserInventoryDataInterface
}) => {
  return (
    <HeaderContainer>
      <TitleContainer>My assets Inventory</TitleContainer>
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
