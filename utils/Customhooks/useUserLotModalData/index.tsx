import { useEffect, useState } from 'react'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { UserInventoryDataInterface } from '@/views/User/InventoryManagementPage/Desktop/types'
import { SalesListInterface } from '@/utils/ApiTypes/getSales'

export interface UseUserLotModalDataInterface {
  lotProducts: (ProductList | SalesListInterface)[] | undefined
}

export const useUserLotModalData = (
  inventoryData: UserInventoryDataInterface
): UseUserLotModalDataInterface => {
  const [lotProducts, setLotProducts] = useState<
    (ProductList | SalesListInterface)[] | undefined
  >(undefined)

  useEffect(() => {
    const filteredProducts = (inventoryData.productList || [])?.filter(
      product => inventoryData.selectedProductIds?.includes(product._id)
    )
    setLotProducts(filteredProducts)
  }, [inventoryData.productList, inventoryData.selectedProductIds])

  return {
    lotProducts
  }
}

export default useUserLotModalData
