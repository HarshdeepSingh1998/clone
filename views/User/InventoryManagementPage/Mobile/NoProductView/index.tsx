import NoProductFound from '@/components/NoProductFound'
import { NoProductViewInterface } from 'views/User/InventoryManagementPage/Mobile/types'
import {
  NoProductViewContainer,
  LoadMoreContainer,
  LoadMore
} from '@/styles/Views/User/InventoryManagementPage/Mobile/NoProduct'

const NoProductView = ({
  productList,
  data,
  handleLoadMoreClick,
  totalLength
}: NoProductViewInterface) => {
  return (
    <div style={{ width: '100%' }}>
      {(productList || [])?.length === 0 && data && (
        <NoProductViewContainer className="admin-marketplace">
          <NoProductFound heading="No Assets Found." text=" " />
        </NoProductViewContainer>
      )}
      {(productList || [])?.length < Number(totalLength) &&
        (productList || [])?.length !== 0 && (
          <LoadMoreContainer>
            <LoadMore onClick={handleLoadMoreClick}>Load More</LoadMore>
          </LoadMoreContainer>
        )}
    </div>
  )
}

export default NoProductView
