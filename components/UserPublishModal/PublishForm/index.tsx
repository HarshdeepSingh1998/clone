import { PublishFormProps } from 'components/UserPublishModal/types'
import Button from '@/components/Button'
import CurrencyDropdown from '@/components/CurrencyDropdown'
import Switch from '@/components/Switch'
import DatePicker from '@/components/DatePicker'
import {
  FormContainer,
  InputContainer,
  ButtonContainer,
  FieldRow,
  NoteContainer
} from '@/styles/Components/UserPublishModal/PublishModalForm'

const PublishForm: React.FC<PublishFormProps> = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
  inventoryData,
  reset,
  publishModalData
}) => {
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <>
          <FieldRow>
            <CurrencyDropdown
              control={control}
              errors={errors}
              controllername={'askPrice'}
              title={'Asking Price'}
            />
            {inventoryData.productDetails?.hosting ? (
              <Switch
                userPublishModalData={publishModalData}
                startvalue="Sell"
                endvalue="Auction"
              />
            ) : (
              <CurrencyDropdown
                control={control}
                errors={errors}
                controllername={'shippingPrice'}
                title={'Shipping Price'}
              />
            )}
          </FieldRow>
          {!inventoryData.productDetails?.hosting && (
            <Switch
              userPublishModalData={publishModalData}
              startvalue="Sell"
              endvalue="Auction"
            />
          )}
          <FieldRow>
            <DatePicker
              publishModalData={{} as any}
              controllername={'auctionStartDate'}
              control={control}
              errors={errors}
              title={'Auction Start Date'}
            />
            <DatePicker
              publishModalData={{} as any}
              controllername={'auctionEndDate'}
              control={control}
              errors={errors}
              title={'Auction End Date'}
            />
          </FieldRow>
          <NoteContainer>
            Please note there is a 5% platform commission fee paid by the seller
            upon any successful transaction.
          </NoteContainer>
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
                inventoryData.setIsPublishModalVisible(false), reset()
              }}
            />
          </ButtonContainer>
        </>
      </InputContainer>
    </FormContainer>
  )
}

export default PublishForm
