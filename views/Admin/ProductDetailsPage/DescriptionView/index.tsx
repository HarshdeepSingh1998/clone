import { useSelector } from 'react-redux'
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
import { selectUser } from '@/store/userSlice'

const DescriptionView = ({
  productDetailsData
}: {
  productDetailsData: ProductDetailsInterface
}) => {
  const descriptionDetails =
    productDetailsData.productDetails?.[productDetailsData?.index]

  const userData = useSelector(selectUser)
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
                {productDetailsData.productDetails?.map((data, i) => (
                  <>
                    <ProductCard
                      data={data}
                      width="238px"
                      userData={userData}
                      productDetailsPage={true}
                      setIndex={productDetailsData.setIndex}
                      selectedCard={i === productDetailsData.index}
                      i={i}
                      setSelectedProduct={productDetailsData.setSelectedProduct}
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
