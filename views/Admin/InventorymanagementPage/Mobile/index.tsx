import { useState, useEffect } from 'react'
import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/Mobile/types'
import HeaderView from 'views/Admin/InventorymanagementPage/Mobile/HeaderView'
import TableView from 'views/Admin/InventorymanagementPage/Mobile/TableView'

const InventoryManagementMobile = ({
  inventoryData
}: {
  inventoryData: UseInventoryProductInterface
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
      <TableView inventoryData={inventoryData} />
    </>
  )
}

export default InventoryManagementMobile
