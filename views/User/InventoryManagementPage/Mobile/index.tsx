import { UserInventoryDataInterface } from 'views/User/InventoryManagementPage/Mobile/types'
import HeaderView from 'views/User/InventoryManagementPage/Mobile/HeaderView'
import TableView from 'views/User/InventoryManagementPage/Mobile/TableView'

const InventoryManagementMobile = ({
  inventoryData
}: {
  inventoryData: UserInventoryDataInterface
}) => {
  return (
    <>
      <HeaderView inventoryData={inventoryData} />
      <TableView inventoryData={inventoryData} />
    </>
  )
}

export default InventoryManagementMobile
