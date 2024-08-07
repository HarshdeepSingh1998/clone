import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/Desktop/types'
import HeaderView from 'views/Admin/InventorymanagementPage/Desktop/HeaderView'
import ProductView from 'views/Admin/InventorymanagementPage/Desktop/ProductView'
import TableView from 'views/Admin/InventorymanagementPage/Desktop/TableView'

const InventoryManagementDesktop = ({
  inventoryData,
  screenType
}: {
  inventoryData: UseInventoryProductInterface
  screenType: string
}) => {
  return (
    <>
      <HeaderView inventoryData={inventoryData} />
      <ProductView inventoryData={inventoryData} />
      <TableView inventoryData={inventoryData} screenType={screenType} />
    </>
  )
}

export default InventoryManagementDesktop
