import { DetailsViewInterface } from '@/views/Admin/ProductDetailsPage/DetailsView/types'
import ImageContent from 'views/Admin/ProductDetailsPage/DetailsView/ImageContent'
import ModalDescription from 'views/Admin/ProductDetailsPage/DetailsView/ModalDescription'
import {
  DetailsContainer,
  ImageContainer
} from '@/styles/Views/Admin/ProductDetailsPage/Details'

const DetailsView = ({
  productDetailsData,
  actionButtonDetails,
  open,
  anchorEl,
  setAnchorEl
}: DetailsViewInterface) => {
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
            open={open}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
          />
        )}
      </DetailsContainer>
    </>
  )
}

export default DetailsView
