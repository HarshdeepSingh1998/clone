import { UseAddProductInterface } from 'views/Admin/AddProductPage/types'
import {
  FormContainer,
  AddProductLeftContainer,
  AddContentHeader,
  AddContentTitle,
  BoxImage
} from '@/styles/Views/Admin/AddProductPage/AddProduct/Left'
import Input from '@/components/Input'
import Editor from '@/components/Editor'

const LeftView = ({
  addProductData,
  handleSubmit,
  control,
  errors
}: {
  addProductData: UseAddProductInterface
  handleSubmit: any
  control: any
  errors: any
}) => {
  return (
    <FormContainer onSubmit={handleSubmit(() => {})}>
      <AddProductLeftContainer>
        <AddContentHeader>
          <AddContentTitle>
            <BoxImage />
            Product Details
          </AddContentTitle>
        </AddContentHeader>
        <Input
          title={'Model name'}
          control={control}
          controllername={'modelName'}
          placeholder={'Enter Model Name'}
          type={'text'}
          errors={errors}
          defaultValue=""
          border="none"
        />
        <Input
          title={'Serial Number'}
          control={control}
          controllername={'serialNumber'}
          placeholder={'Enter Serial Number'}
          type={'text'}
          errors={errors}
          defaultValue=""
          border="none"
        />
        <Editor control={control} controllername={'description'} />
      </AddProductLeftContainer>
    </FormContainer>
  )
}

export default LeftView
