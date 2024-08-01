import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/Desktop/types'
import HeaderView from 'views/Admin/InventorymanagementPage/Desktop/HeaderView'
import ProductView from 'views/Admin/InventorymanagementPage/Desktop/ProductView'

const InventoryManagementDesktop = ({
  inventoryData
}: {
  inventoryData: UseInventoryProductInterface
}) => {
  return (
    <>
      <HeaderView inventoryData={inventoryData} />
      <ProductView inventoryData={inventoryData} />
    </>
  )
}

export default InventoryManagementDesktop
