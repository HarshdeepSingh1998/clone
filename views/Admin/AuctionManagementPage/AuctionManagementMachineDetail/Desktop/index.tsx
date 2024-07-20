import { AuctionManagementMachineDetailInterface } from 'views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Desktop/types'
import HeaderView from 'views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Desktop/HeaderView'
import TableView from 'views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Desktop/TableView'

const AuctionManagementMachineDetailDesktop = ({
  auctionManagementData
}: {
  auctionManagementData: AuctionManagementMachineDetailInterface
}) => {
  return (
    <>
      <HeaderView auctionManagementData={auctionManagementData} />
      <TableView auctionManagementData={auctionManagementData} />
    </>
  )
}

export default AuctionManagementMachineDetailDesktop
