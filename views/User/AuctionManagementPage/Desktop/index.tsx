import { AuctionManagementDataInterface } from 'views/User/AuctionManagementPage/Desktop/types'
import HeaderView from 'views/User/AuctionManagementPage/Desktop/HeaderView'
import TableView from 'views/User/AuctionManagementPage/Desktop/TableView'

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
