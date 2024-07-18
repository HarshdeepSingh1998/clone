import { NoProductViewInterface } from 'views/Admin/MembersPage/MemberDetailsPage/Desktop/types'
import NoProductFound from '@/components/NoProductFound'
import {
  NoProductViewContainer,
  LoadMoreContainer,
  LoadMore
} from '@/styles/Views/Admin/MembersPage/MemberDetails/Desktop/NoProduct'

const NoProductView = ({
  productList,
  data,
  handleLoadMoreClick
}: NoProductViewInterface) => {
  return (
    <div>
      {(productList?.memberDetailsData?.assignedProducts || [])?.length === 0 &&
        data && (
          <NoProductViewContainer className="admin-marketplace">
            <NoProductFound heading="No Sales." text=" " />
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
}

export default NoProductView
