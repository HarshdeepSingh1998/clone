import {
  ProductDetailsInterface,
  ActionButtonDetailsInterface
} from '@/views/User/ProductDetailsPage/types'
import ImageContent from 'views/User/ProductDetailsPage/DetailsView/ImageContent'
import ModalDescription from 'views/User/ProductDetailsPage/DetailsView/ModalDescription'
import {
  DetailsContainer,
  ImageContainer
} from '@/styles/Views/User/ProductDetailsPage/Details'

const DetailsView = ({
  productDetailsData,
  actionButtonDetails
}: {
  productDetailsData: ProductDetailsInterface
  actionButtonDetails: ActionButtonDetailsInterface
}) => {
  return (
    <>
      <DetailsContainer>
        <ImageContainer>
          <ImageContent productDetailsData={productDetailsData} />
        </ImageContainer>
        {(productDetailsData.productDetails || [])?.length > 0 && (
          <ModalDescription
            productDetailsData={productDetailsData}
            actionButtonDetails={actionButtonDetails}
          />
        )}
      </DetailsContainer>
    </>
  )
}

export default DetailsView
