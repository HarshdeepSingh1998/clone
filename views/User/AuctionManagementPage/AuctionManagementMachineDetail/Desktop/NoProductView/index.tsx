import { NoProductViewInterface } from 'views/User/AuctionManagementPage/AuctionManagementMachineDetail/Desktop/types'
import NoProductFound from '@/components/NoProductFound'
import {
  NoProductViewContainer,
  LoadMoreContainer,
  LoadMore
} from '@/styles/Views/User/AuctionManagementPage/AuctionManagementMachineDetail/Desktop/NoProduct'

const NoProductView = ({
  productList,
  data,
  handleLoadMoreClick
}: NoProductViewInterface) => {
  return (
    <div>
      {(productList || [])?.length === 0 && data && (
        <NoProductViewContainer className="admin-marketplace">
          <NoProductFound heading="No Bids." text=" " />
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
