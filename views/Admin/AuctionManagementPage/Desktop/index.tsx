import { useState, useEffect } from 'react'
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

export default AuctionManagementDesktop
