import { useState, useEffect } from 'react'
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
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

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
