import { NoProductViewInterface } from 'views/Admin/MembersPage/MemberDetailsPage/Mobile/types'
import NoProductFound from '@/components/NoProductFound'
import {
  NoProductViewContainer,
  LoadMoreContainer,
  LoadMore
} from '@/styles/Views/Admin/MembersPage/MemberDetails/Mobile/NoProduct'

const NoProductView = ({
  productList,
  data,
  handleLoadMoreClick,
  biddingList,
  active
}: NoProductViewInterface) => {
  if (active === `1`) {
    return (
      <div>
        {(productList?.memberDetailsData?.assignedProducts || [])?.length ===
          0 &&
          data && (
            <NoProductViewContainer className="admin-marketplace">
              <NoProductFound heading="No Products Found" text=" " />
            </NoProductViewContainer>
          )}
        {productList?.displayedRows <
          Number(productList?.memberDetailsData?.assignedProducts?.length) &&
          (productList?.memberDetailsData?.assignedProducts || [])?.length !==
            0 && (
            <LoadMoreContainer>
              <LoadMore onClick={handleLoadMoreClick}>Load More</LoadMore>
            </LoadMoreContainer>
          )}
      </div>
    )
  } else {
    return (
      <div>
        {(biddingList || [])?.length === 0 && data && (
          <NoProductViewContainer className="admin-marketplace">
            <NoProductFound heading="No Bids Found." text=" " />
          </NoProductViewContainer>
        )}
        {(biddingList || [])?.length < data?.data?.meta?.totalNumberOfResults &&
          (biddingList || [])?.length !== 0 && (
            <LoadMoreContainer>
              <LoadMore onClick={handleLoadMoreClick}>Load More</LoadMore>
            </LoadMoreContainer>
          )}
      </div>
    )
  }
}

export default NoProductView
