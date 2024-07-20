import { NoProductViewInterface } from 'views/Admin/AuctionManagementPage/Desktop/types'
import NoProductFound from '@/components/NoProductFound'
import {
  NoProductViewContainer,
  LoadMoreContainer,
  LoadMore
} from '@/styles/Views/Admin/AuctionManagementPage/Desktop/NoProduct'
const NoProductView = ({
  productList,
  data,
  handleLoadMoreClick
}: NoProductViewInterface) => {
  return (
    <div>
      {(productList || [])?.length === 0 && data && (
        <NoProductViewContainer className="admin-marketplace">
          <NoProductFound heading="No Sales." text=" " />
        </NoProductViewContainer>
      )}
      {(productList || [])?.length < data?.data?.meta?.totalNumberOfResults &&
        (productList || [])?.length !== 0 && (
          <LoadMoreContainer>
            <LoadMore onClick={handleLoadMoreClick}>Load More</LoadMore>
          </LoadMoreContainer>
        )}
    </div>
  )
}

export default NoProductView
