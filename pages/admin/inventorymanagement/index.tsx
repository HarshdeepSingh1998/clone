import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'
import HeaderView from '@/views/Admin/InventorymanagementPage/HeaderView'
import { InventorymanagementContainer } from '@/styles/Pages/Admin/InventorymanagementPage'
import { useInventoryProduct } from '@/utils/Customhooks/useInventoryProduct'

const InventoryManagement = () => {
  const inventoryData = useInventoryProduct()
  return (
    <AuthLayout>
      <InventorymanagementContainer>
        <HeaderView inventoryData={inventoryData} />
        {/* <ProductView /> */}
      </InventorymanagementContainer>
    </AuthLayout>
  )
}

export default withAuth(InventoryManagement, 'admin')
