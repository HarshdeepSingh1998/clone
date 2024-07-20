import { AuctionManagementDataInterface } from 'views/Admin/AuctionManagementPage/Desktop/types'
import HeaderView from 'views/Admin/AuctionManagementPage/Desktop/HeaderView'
import TableView from 'views/Admin/AuctionManagementPage/Desktop/TableView'

const AuctionManagementDesktop = ({
  auctionManagementData,
  screenType
}: {
  auctionManagementData: AuctionManagementDataInterface
  screenType: string
}) => {
  return (
    <>
      <HeaderView auctionManagementData={auctionManagementData} />
      <TableView
        auctionManagementData={auctionManagementData}
        screenType={screenType}
      />
    </>
  )
}

export default AuctionManagementDesktop
