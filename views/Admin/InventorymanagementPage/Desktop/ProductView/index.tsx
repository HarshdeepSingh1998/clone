import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/Desktop/types'
import Header from 'views/Admin/InventorymanagementPage/Desktop/ProductView/Header'
import {
  ProductViewContainer,
  ProductViewContent
} from '@/styles/Views/Admin/InventorymanagementPage/Desktop/Product'

const ProductView = ({
  inventoryData
}: {
  inventoryData: UseInventoryProductInterface
}) => {
  return (
    <ProductViewContainer>
      <ProductViewContent className="admin-inventory">
        <Header inventoryData={inventoryData} />
      </ProductViewContent>
    </ProductViewContainer>
  )
}

export default ProductView
