import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useAddProductForm } from '@/utils/Customhooks/useAddProductForm'
import LeftView from 'views/Admin/AddProductPage/AddProductView/LeftView'
import {
  AddProductContainer,
  AddProductRightContainer,
  ProductRightContent,
  TextContainer,
  BoxImage,
  ProductImagesContainer,
  ImagesPreviewContainer,
  PreviewDescription,
  DescriptionLabel,
  ModalNameContainer,
  ModalNameText
} from '@/styles/Views/Admin/AddProductPage/AddProduct'
import useAddProduct from '@/utils/Customhooks/useAddProduct'
import useSubmit from '@/utils/Callback/Admin/AddProductPage'

const AddProductView = () => {
  const productDetails = useSelector(
    (state: RootState) => state.product.productDetails
  )
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch
  } = useAddProductForm(productDetails)

  const addProductData = useAddProduct({ productDetails, watch })

  const { onSubmit } = useSubmit(addProductData, productDetails)

  return (
    <AddProductContainer>
      <LeftView
        addProductData={addProductData}
        handleSubmit={handleSubmit}
        control={control}
        errors={errors}
        onSubmit={onSubmit}
      />
      <AddProductRightContainer>
        <ProductRightContent>
          <TextContainer>
            <BoxImage />
            Preview
          </TextContainer>
        </ProductRightContent>
        {(addProductData.selectedImages.length > 0 ||
          addProductData.modelName.length > 0) && (
          <ProductImagesContainer height={'auto'}>
            <ImagesPreviewContainer>
              {addProductData.selectedImages.length > 0 ? (
                <Image
                  src={addProductData.selectedImages[0]}
                  alt="img"
                  width={40}
                  height={40}
                />
              ) : (
                <div style={{ color: '#fff' }}>No Image To Preview</div>
              )}
            </ImagesPreviewContainer>
            <PreviewDescription>
              {addProductData.manufacturer && (
                <DescriptionLabel>
                  {addProductData.manufacturer}
                </DescriptionLabel>
              )}
              {addProductData.modelName?.length > 0 && (
                <ModalNameContainer>
                  {addProductData.modelName}
                  <ModalNameText>
                    {addProductData.power} kW | {addProductData.hashRate} TH/s
                  </ModalNameText>
                </ModalNameContainer>
              )}
            </PreviewDescription>
          </ProductImagesContainer>
        )}
      </AddProductRightContainer>
    </AddProductContainer>
  )
}

export default AddProductView
