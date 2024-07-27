import { AuctionManagementMachineDetailInterface } from 'views/User/AuctionManagementPage/AuctionManagementMachineDetail/Mobile/types'
import HeaderView from 'views/User/AuctionManagementPage/AuctionManagementMachineDetail/Mobile/HeaderView'
import TableView from 'views/User/AuctionManagementPage/AuctionManagementMachineDetail/Mobile/TableView'

const AuctionManagementMachineDetailMobile = ({
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

export default AuctionManagementMachineDetailMobile
