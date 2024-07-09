import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/ProductView/types'
import Header from 'views/Admin/InventorymanagementPage/ProductView/Header'
import {
  ProductViewContainer,
  ProductViewContent
} from '@/styles/Views/Admin/InventorymanagementPage/Product'

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
