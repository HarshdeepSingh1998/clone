import Image from 'next/image'
import { ProductDetailsInterface } from '@/views/Admin/ProductDetailsPage/DetailsView/types'
import DefaultMachineImage from 'assets/images/images/bid.png'
import {
  ImageDetailsContainer,
  ImageSelectorContainer,
  PreviewImageContainer
} from '@/styles/Views/Admin/ProductDetailsPage/Details/Image'

const ImageContent = ({
  productDetailsData
}: {
  productDetailsData: ProductDetailsInterface
}) => {
  return (
    <>
      <ImageDetailsContainer>
        {productDetailsData.images?.map((data: string, i: number) => (
          <ImageSelectorContainer
            key={i}
            onClick={() => productDetailsData.handleClick(i)}
            isSelected={productDetailsData.selectedImageIndex === i}
          >
            <Image
              src={data}
              alt="productdetails-image"
              width={48}
              height={48}
            />
          </ImageSelectorContainer>
        ))}
      </ImageDetailsContainer>
      <div>
        {productDetailsData.images && productDetailsData.images?.length > 0 ? (
          <PreviewImageContainer>
            {productDetailsData.selectedImageIndex !== null && (
              <Image
                src={
                  productDetailsData.images?.[
                    productDetailsData.selectedImageIndex
                  ] as string
                }
                alt="minus"
                width={250}
                height={250}
              />
            )}
          </PreviewImageContainer>
        ) : (
          <PreviewImageContainer>
            <Image
              src={DefaultMachineImage}
              alt="minus"
              width={250}
              height={250}
            />
          </PreviewImageContainer>
        )}
      </div>
    </>
  )
}

export default ImageContent
