import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'
import { useInventoryProduct } from '@/utils/Customhooks/useInventoryProduct'
import ProductView from '@/views/Admin/InventorymanagementPage/ProductView'
import HeaderView from '@/views/Admin/InventorymanagementPage/HeaderView'
import { InventorymanagementContainer } from '@/styles/Pages/Admin/InventorymanagementPage'

const InventoryManagement = () => {
  const inventoryData = useInventoryProduct()
  return (
    <AuthLayout>
      <InventorymanagementContainer>
        <HeaderView inventoryData={inventoryData} />
        <ProductView inventoryData={inventoryData} />
      </InventorymanagementContainer>
    </AuthLayout>
  )
}

export default withAuth(InventoryManagement, 'admin')
