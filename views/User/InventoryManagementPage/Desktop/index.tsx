import { UserInventoryDataInterface } from 'views/User/InventoryManagementPage/Desktop/types'
import HeaderView from 'views/User/AuctionManagementPage/Desktop/HeaderView'
import TableView from 'views/User/AuctionManagementPage/Desktop/TableView'

const InventoryManagementDesktop = ({
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

export default InventoryManagementDesktop
