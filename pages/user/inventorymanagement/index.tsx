import withAuth from '@/utils/Authentication'
import useUserInventoryData from '@/utils/Customhooks/useUserInventoryData'
import useScreenType from '@/utils/Customhooks/useScreenType'
import AuthLayout from '@/components/AuthLayout'
import UserRevokeModal from '@/components/UserRevokeModal'
import UserPublishModal from '@/components/UserPublishModal'
import UserLotModal from '@/components/UserLotModal'
import InventoryManagementDesktop from '@/views/User/InventoryManagementPage/Desktop'
import { InventoryManagementContainer } from '@/styles/Pages/User/InventoryManagementPage'

const InventoryManagement = () => {
  const inventoryData = useUserInventoryData()
  const { screenType } = useScreenType()

  return (
    <AuthLayout
      isPopUpVisible={
        inventoryData.showRevokeModel ||
        inventoryData.isLotModalOpen ||
        inventoryData.isPublishModalVisible
      }
    >
      <InventoryManagementContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <InventoryManagementDesktop inventoryData={inventoryData} />
        )}
        {/* {screenType === 'mobile' && (
          <ContractManagementMobile contractData={contractData} />
        )} */}
      </InventoryManagementContainer>
      <UserRevokeModal
        setShowRevokeModel={inventoryData?.setShowRevokeModel}
        isOpen={inventoryData?.showRevokeModel}
        inventoryData={inventoryData}
      />
      <UserPublishModal inventoryData={inventoryData} />
      {inventoryData.isLotModalOpen && (
        <UserLotModal inventoryData={inventoryData} />
      )}
    </AuthLayout>
  )
}

export default withAuth(InventoryManagement, 'user')
