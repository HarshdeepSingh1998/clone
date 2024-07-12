import Image from 'next/image'
import { UploadImageInterface } from 'components/UploadImage/types'
import Filled from 'assets/images/images/filled.png'
import {
  UploadImageContainer,
  InputText,
  ProductImagesContainer,
  DropImages,
  InputFile,
  ImagesContainer
} from '@/styles/Components/UploadImage'

const UploadImage = ({ addProductData }: UploadImageInterface) => {
  return (
    <UploadImageContainer>
      <InputText>Product Images</InputText>
      <ProductImagesContainer>
        <DropImages>
          <InputFile
            type="file"
            multiple
            onChange={addProductData.handleImageChange}
          />
          <Image src={Filled} alt="minus" quality={100} />
          Click or Drop Images
        </DropImages>
        <ImagesContainer>
          {addProductData.renderPhoto(
            addProductData.selectedImages as string[]
          )}
        </ImagesContainer>
      </ProductImagesContainer>
    </UploadImageContainer>
  )
}

export default UploadImage
