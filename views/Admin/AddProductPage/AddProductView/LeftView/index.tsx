import { useRouter } from 'next/router'
import { UseAddProductInterface } from 'views/Admin/AddProductPage/types'
import {
  availabilityOptions,
  coolingOptions,
  manufacturerOptions,
  productStatusOptions
} from 'views/Admin/AddProductPage/data'
import Input from '@/components/Input'
import Editor from '@/components/Editor'
import UploadImage from '@/components/UploadImage'
import SelectIndicator from '@/components/SelectIndicator'
import Button from '@/components/Button'
import {
  FormContainer,
  AddProductLeftContainer,
  AddContentHeader,
  AddContentTitle,
  BoxImage,
  RowContainer,
  ButtonContainer
} from '@/styles/Views/Admin/AddProductPage/AddProduct/Left'

const LeftView = ({
  addProductData,
  handleSubmit,
  control,
  errors,
  onSubmit
}: {
  addProductData: UseAddProductInterface
  handleSubmit: any
  control: any
  errors: any
  onSubmit: any
}) => {
  const router = useRouter()
  console.log('errors', errors)
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <AddProductLeftContainer>
        <AddContentHeader>
          <AddContentTitle>
            <BoxImage />
            Product Details
          </AddContentTitle>
        </AddContentHeader>
        <RowContainer>
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
        </RowContainer>
        <Editor
          control={control}
          controllername={'description'}
          errors={errors}
          value={''}
        />
        <UploadImage addProductData={addProductData} />
        <SelectIndicator
          title="Manufacturer"
          control={control}
          controllername="manufacturer"
          defaultValue={''}
          placeholder="Select Manufacturer"
          options={manufacturerOptions}
          width="100%"
          errors={errors}
        />
        <RowContainer>
          <SelectIndicator
            title="Product Status"
            control={control}
            controllername="productStatus"
            defaultValue={''}
            placeholder="Select Status"
            options={productStatusOptions}
            width="100%"
            errors={errors}
          />
          <SelectIndicator
            title="Availability"
            control={control}
            controllername="availability"
            defaultValue={''}
            placeholder="Select"
            options={availabilityOptions}
            width="100%"
            errors={errors}
          />
        </RowContainer>
      </AddProductLeftContainer>
      <AddProductLeftContainer>
        <AddContentHeader>
          <AddContentTitle>
            <BoxImage />
            Additional Details
          </AddContentTitle>
        </AddContentHeader>
        <RowContainer>
          <Input
            title={'Efficiency'}
            control={control}
            controllername={'efficiency'}
            placeholder={'Enter Value'}
            type={'number'}
            step="any"
            errors={errors}
            defaultValue=""
            maxwidth="100%"
            border="none"
          />
          <SelectIndicator
            title="Cooling"
            control={control}
            controllername="cooling"
            defaultValue={''}
            placeholder="Select"
            options={coolingOptions}
            width="100%"
            errors={errors}
          />
        </RowContainer>
        <RowContainer>
          <Input
            title={'Power'}
            control={control}
            controllername={'power'}
            placeholder={'Enter Value'}
            type={'number'}
            step="any"
            errors={errors}
            defaultValue=""
            maxwidth="100%"
            border="none"
          />
          <Input
            title={'Hashrate'}
            control={control}
            controllername={'hashRate'}
            placeholder={'Enter Value'}
            type={'number'}
            step="any"
            errors={errors}
            defaultValue=""
            maxwidth="100%"
            border="none"
          />
        </RowContainer>
      </AddProductLeftContainer>
      <ButtonContainer>
        <Button
          type="submit"
          variant="contained"
          label={'Add Machine'}
          disable={false}
        />
        <Button
          type="reset"
          variant="outline"
          label={'Cancel'}
          onClick={() => {
            router.push('/admin/inventorymanagement')
          }}
        />
      </ButtonContainer>
    </FormContainer>
  )
}

export default LeftView
