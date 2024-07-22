import { AuctionManagementDataInterface } from 'views/Admin/AuctionManagementPage/Mobile/types'
import HeaderView from 'views/Admin/AuctionManagementPage/Mobile/HeaderView'
import TableView from 'views/Admin/AuctionManagementPage/Mobile/TableView'

const AuctionManagementMobile = ({
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

export default AuctionManagementMobile
