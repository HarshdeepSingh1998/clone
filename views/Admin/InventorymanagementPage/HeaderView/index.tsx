import { toast } from 'react-toastify'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Button from '@/components/Button'
import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/HeaderView/types'
import File from 'assets/images/images/File.png'
import CircleIcon from '@/assets/images/svg/CircleIcon'
import {
  HeaderContainer,
  TitleContainer,
  ButtonContainer,
  PrimaryButttonContainer,
  SecondaryButtonContainer
} from '@/styles/Views/Admin/InventorymanagementPage/Header'
import Loader from '@/components/Loader'

const HeaderView = ({
  inventoryData
}: {
  inventoryData: UseInventoryProductInterface
}) => {
  const router = useRouter()
  const handleLotModalClick = () => {
    const selectedProducts = inventoryData.productList?.filter(product =>
      inventoryData.selectedProductIds?.includes(product._id)
    )

    const modelNames = selectedProducts?.map(product => product?.modelName)
    const isSameModelName = modelNames?.every(name => name === modelNames[0])

    if (isSameModelName && (selectedProducts || [])?.length > 0) {
      inventoryData.toggleModal('isLotModalOpen')
    } else {
      toast.error('Error: Products must have the same model name.')
    }
  }

  return (
    <HeaderContainer>
      <TitleContainer>Inventory Management</TitleContainer>
      <ButtonContainer>
        {inventoryData.selectedProductIds?.length >= 2 ? (
          <>
            <PrimaryButttonContainer
              onClick={() => inventoryData.toggleModal('showBulkDeleteModel')}
            >
              Bulk Delete
            </PrimaryButttonContainer>
            <PrimaryButttonContainer
              onClick={() =>
                inventoryData.toggleModal('bulkAssignModalVisible')
              }
            >
              Bulk Assign
            </PrimaryButttonContainer>
            <SecondaryButtonContainer onClick={handleLotModalClick}>
              <Button type="button" variant="contained" label={''}>
                Create A Lot
              </Button>
            </SecondaryButtonContainer>
          </>
        ) : (
          <>
            <PrimaryButttonContainer
              onClick={() => inventoryData.setImportCsvModalVisible(true)}
            >
              <Image src={File} alt="minus" />
              Bulk Upload
            </PrimaryButttonContainer>
            <SecondaryButtonContainer
              onClick={() => router.push('/admin/addProduct')}
            >
              <Button type="button" variant="contained" label={''}>
                <CircleIcon cursor="pointer" /> {''}
                Add Product
              </Button>
            </SecondaryButtonContainer>
          </>
        )}
      </ButtonContainer>
      {!inventoryData?.data && (
        <Loader blurredBackgroundtrue={!inventoryData?.data} />
      )}
    </HeaderContainer>
  )
}

export default HeaderView
