import { AddContractFormProps } from 'components/AddContract/types'
import Input from '@/components/Input'
import CurrencyDropdown from '@/components/CurrencyDropdown'
import DatePicker from '@/components/DatePicker'
import FileUploadInput from '@/components/FileUploadInput'
import {
  FormContainer,
  InputContainer,
  ButtonContainer
} from '@/styles/Components/AddContract/AddContractForm'
import Button from '@/components/Button'

const AddContractForm: React.FC<AddContractFormProps> = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
  watch,
  isEditModalOpen,
  setValue,
  reset,
  closeModal
}) => {
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <>
          <Input
            title={'Contract ID'}
            control={control}
            controllername={'contractId'}
            placeholder={'Enter Contract ID'}
            type={'text'}
            errors={errors}
            disabled={isEditModalOpen ? true : false}
            defaultValue=""
            border="none"
          />
          <Input
            title={'Location'}
            control={control}
            controllername={'location'}
            placeholder={'Enter Location'}
            type={'text'}
            errors={errors}
            disabled={false}
            defaultValue=""
            border="none"
          />
          <Input
            title={'Hosting Rate'}
            control={control}
            controllername={'hostRate'}
            placeholder={'Enter Hosting Rate'}
            type={'number'}
            errors={errors}
            disabled={false}
            defaultValue=""
            border="none"
          />
          <CurrencyDropdown
            control={control}
            errors={errors}
            controllername="depositPrice"
            title={'Deposit Amount'}
          />
          <CurrencyDropdown
            control={control}
            errors={errors}
            controllername={'setupPrice'}
            title={'Setup Fee'}
          />
          <DatePicker
            publishModalData={{} as any}
            controllername={'expirationDate'}
            control={control}
            errors={errors}
            title={'Expiration Date'}
          />
          <FileUploadInput
            control={control}
            controllername={'document'}
            isEditModalOpen={isEditModalOpen}
            document={watch('document')}
            setValue={setValue}
            errors={errors}
          />
        </>
        <ButtonContainer disable={false}>
          <Button
            type="submit"
            variant="contained"
            disable={false}
            label={'Publish'}
          />
          <Button
            type="submit"
            variant="text"
            label={'Cancel'}
            onClick={() => {
              closeModal()
              reset()
            }}
          />
        </ButtonContainer>
      </InputContainer>
    </FormContainer>
  )
}

export default AddContractForm
