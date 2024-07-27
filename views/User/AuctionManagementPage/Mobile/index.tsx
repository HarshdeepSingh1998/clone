import { AuctionManagementDataInterface } from 'views/User/AuctionManagementPage/Mobile/types'
import HeaderView from 'views/User/AuctionManagementPage/Mobile/HeaderView'
import TableView from 'views/User/AuctionManagementPage/Mobile/TableView'

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
