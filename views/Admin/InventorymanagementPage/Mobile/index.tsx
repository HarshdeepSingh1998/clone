import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/Mobile/types'
import HeaderView from 'views/Admin/InventorymanagementPage/Mobile/HeaderView'
// import TableView from 'views/Admin/InventorymanagementPage/Mobile/TableView'

const InventoryManagementMobile = ({
  inventoryData
}: {
  inventoryData: UseInventoryProductInterface
}) => {
  return (
    <>
      <HeaderView inventoryData={inventoryData} />
      {/* <TableView inventoryData={inventoryData} /> */}
    </>
  )
}

export default InventoryManagementMobile
