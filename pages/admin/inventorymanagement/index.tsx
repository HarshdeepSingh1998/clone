import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { useInventoryProduct } from '@/utils/Customhooks/useInventoryProduct'
import InventoryManagementDesktop from '@/views/Admin/InventorymanagementPage/Desktop'
import InventoryManagementMobile from '@/views/Admin/InventorymanagementPage/Mobile'
import { InventorymanagementContainer } from '@/styles/Pages/Admin/InventorymanagementPage'

const InventoryManagement = () => {
  const inventoryData = useInventoryProduct()
  const { screenType } = useScreenType()
  return (
    <AuthLayout>
      <InventorymanagementContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <InventoryManagementDesktop
            inventoryData={inventoryData}
            screenType={screenType}
          />
        )}
        {screenType === 'mobile' && (
          <InventoryManagementMobile inventoryData={inventoryData} />
        )}
      </InventorymanagementContainer>
    </AuthLayout>
  )
}

export default withAuth(InventoryManagement, 'admin')
