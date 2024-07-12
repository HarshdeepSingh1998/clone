import {
  AddProductContainer,
  AddProductLeftContainer,
  AddProductRightContainer,
  ProductRightContent,
  TextContainer,
  BoxImage
} from '@/styles/Views/Admin/AddProductPage/AddProduct'

const AddProductView = () => {
  return (
    <AddProductContainer>
      <AddProductLeftContainer></AddProductLeftContainer>
      <AddProductRightContainer>
        <ProductRightContent>
          <TextContainer>
            <BoxImage />
            Preview
          </TextContainer>
        </ProductRightContent>
      </AddProductRightContainer>
    </AddProductContainer>
  )
}

export default AddProductView
