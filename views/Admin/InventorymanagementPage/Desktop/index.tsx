import { useState, useEffect } from 'react'
import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/Desktop/types'
import HeaderView from 'views/Admin/InventorymanagementPage/Desktop/HeaderView'
import TableView from 'views/Admin/InventorymanagementPage/Desktop/TableView'

const InventoryManagementDesktop = ({
  inventoryData,
  screenType
}: {
  inventoryData: UseInventoryProductInterface
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
      <HeaderView inventoryData={inventoryData} />
      <TableView inventoryData={inventoryData} screenType={screenType} />
    </>
  )
}

export default InventoryManagementDesktop
