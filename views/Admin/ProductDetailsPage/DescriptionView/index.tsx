import { ProductDetailsInterface } from 'views/Admin/ProductDetailsPage/DescriptionView/types'
import {
  DescriptionContainer,
  TitleContainer,
  BoxImage,
  DescriptionContent,
  ProductDescription,
  CardContainer
} from '@/styles/Views/Admin/ProductDetailsPage/Description'
import ProductCard from '@/components/ProductCard'

const DescriptionView = ({
  productDetailsData
}: {
  productDetailsData: ProductDetailsInterface
}) => {
  const descriptionDetails =
    productDetailsData.productDetails?.[productDetailsData?.index]
  return (
    <>
      {!descriptionDetails?.lotId && (
        <DescriptionContainer>
          <TitleContainer>
            <BoxImage />
            Description
          </TitleContainer>
          <DescriptionContent>
            {productDetailsData?.sanitizeHTML(descriptionDetails?.description)}
          </DescriptionContent>
        </DescriptionContainer>
      )}
      {(descriptionDetails?.lotId
        ? descriptionDetails?.lotCreatedBy === descriptionDetails?.user?._id
        : descriptionDetails?.lotId) && (
        <>
          <ProductDescription>
            <TitleContainer>
              <BoxImage />
              Products
            </TitleContainer>
            <DescriptionContent>
              <CardContainer>
                {productDetailsData.productDetails?.map(data => (
                  <>
                    <ProductCard
                      data={data}
                      //   toggleActive={'1'}
                      productDetailsPage={true}
                      //   setIndex={productDetailsData.setIndex}
                      //   index={productDetailsData.index}
                      //   setSelectedProduct={productDetailsData.setSelectedProduct}
                    />
                  </>
                ))}
              </CardContainer>
            </DescriptionContent>
          </ProductDescription>
        </>
      )}
    </>
  )
}

export default DescriptionView
