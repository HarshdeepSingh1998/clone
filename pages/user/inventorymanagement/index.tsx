import withAuth from '@/utils/Authentication'
import useUserInventoryData from '@/utils/Customhooks/useUserInventoryData'
import useScreenType from '@/utils/Customhooks/useScreenType'
import AuthLayout from '@/components/AuthLayout'
import InventoryManagementDesktop from '@/views/User/InventoryManagementPage/Desktop'
import { InventoryManagementContainer } from '@/styles/Pages/User/InventoryManagementPage'

const InventoryManagement = () => {
  const inventoryData = useUserInventoryData()
  const { screenType } = useScreenType()

  return (
    <AuthLayout>
      <InventoryManagementContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <InventoryManagementDesktop inventoryData={inventoryData} />
        )}
        {/* {screenType === 'mobile' && (
          <ContractManagementMobile contractData={contractData} />
        )} */}
      </InventoryManagementContainer>
    </AuthLayout>
  )
}

export default withAuth(InventoryManagement, 'user')
