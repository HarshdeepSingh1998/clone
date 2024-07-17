import { NoProductViewInterface } from 'views/Admin/MembersPage/Mobile/types'
import NoProductFound from '@/components/NoProductFound'
import {
  NoProductViewContainer,
  LoadMoreContainer,
  LoadMore
} from '@/styles/Views/Admin/MembersPage/Mobile/NoProduct'

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
      {(productList || [])?.length < data?.data?.meta?.totalResults &&
        (productList || [])?.length !== 0 && (
          <LoadMoreContainer>
            <LoadMore onClick={handleLoadMoreClick}>Load More</LoadMore>
          </LoadMoreContainer>
        )}
    </div>
  )
}

export default NoProductView
