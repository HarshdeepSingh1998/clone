import { useEffect, useState } from 'react'
import { PublishFormProps } from 'components/PublishModal/types'
import SelectIndicator from '@/components/SelectIndicator'
import {
  hostingTypeOptions,
  renderFieldRows
} from 'components/PublishModal/data'
import Button from '@/components/Button'
import CurrencyDropdown from '@/components/CurrencyDropdown'
import Switch from '@/components/Switch'
import {
  FormContainer,
  InputContainer,
  ButtonContainer,
  DatePickerContainer,
  InputContent
} from '@/styles/Components/PublishModal/PublishModalForm'
import DatePicker from '@/components/DatePicker'

const PublishForm: React.FC<PublishFormProps> = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
  watch,
  setIsPublishModalVisible,
  setValue,
  publishModalData,
  reset
}) => {
  const [, setShowContractFields] = useState(false)
  const [showAdditionalFields, setShowAdditionalFields] = useState(false)

  useEffect(() => {
    if (publishModalData.hostingType === 'with_hosting') {
      setShowContractFields(true)
    } else {
      setShowContractFields(false)
    }

    if (
      publishModalData.hostingType === 'with_hosting' &&
      publishModalData.contract
    ) {
      setShowAdditionalFields(true)
    } else {
      setShowAdditionalFields(false)
    }
  }, [publishModalData])

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <>
          <SelectIndicator
            title="Hosting Type"
            control={control}
            controllername="hosting"
            defaultValue={''}
            placeholder="Select Hosting Type"
            options={hostingTypeOptions}
            width="100%"
            errors={errors}
          />
          {publishModalData.hostingType === 'with_hosting' && (
            <SelectIndicator
              title="Contract Type"
              control={control}
              controllername="contract"
              defaultValue={''}
              placeholder="Select Contract Type"
              options={publishModalData.contractTypeOptions}
              width="100%"
              errors={errors}
            />
          )}
          {showAdditionalFields && (
            <>
              {renderFieldRows(control, errors)}
              <InputContent>
                <CurrencyDropdown
                  control={control}
                  errors={errors}
                  controllername="askPrice"
                  title="Selling Price"
                />
                <Switch
                  publishModalData={publishModalData}
                  startvalue="Sell"
                  endvalue="Auction"
                />
              </InputContent>
              <div>
                {publishModalData.toggleValue === 'Bid' && (
                  <DatePickerContainer>
                    <DatePicker
                      publishModalData={publishModalData}
                      controllername={'auctionStartDate'}
                      control={control}
                      errors={errors}
                      title={'Auction Start Date'}
                    />
                    <DatePicker
                      publishModalData={publishModalData}
                      controllername={'auctionEndDate'}
                      control={control}
                      errors={errors}
                      title={'Auction End Date'}
                    />
                  </DatePickerContainer>
                )}
              </div>
            </>
          )}
          {publishModalData.hostingType === 'without_hosting' && (
            <>
              <Switch
                publishModalData={publishModalData}
                className="switch"
                startvalue="Auction"
                endvalue="Sell"
              />
              {publishModalData.toggleValue === 'Bid' && (
                <>
                  <InputContent>
                    <CurrencyDropdown
                      control={control}
                      errors={errors}
                      controllername="askPrice"
                      title="Asking Price"
                    />
                    <CurrencyDropdown
                      control={control}
                      errors={errors}
                      controllername="shippingPrice"
                      title="Shipping Cost"
                    />
                  </InputContent>
                  <DatePickerContainer>
                    <DatePicker
                      publishModalData={publishModalData}
                      controllername={'auctionStartDate'}
                      control={control}
                      errors={errors}
                      title={'Auction Start Date'}
                    />
                    <DatePicker
                      publishModalData={publishModalData}
                      controllername={'auctionEndDate'}
                      control={control}
                      errors={errors}
                      title={'Auction End Date'}
                    />
                  </DatePickerContainer>
                </>
              )}
              {publishModalData.toggleValue !== 'Bid' && (
                <InputContent>
                  <CurrencyDropdown
                    control={control}
                    errors={errors}
                    controllername="askPrice"
                    title="Asking Price"
                  />
                  <CurrencyDropdown
                    control={control}
                    errors={errors}
                    controllername="shippingPrice"
                    title="Shipping Cost"
                  />
                </InputContent>
              )}
            </>
          )}
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
                setIsPublishModalVisible(false), reset()
              }}
            />
          </ButtonContainer>
        </>
      </InputContainer>
    </FormContainer>
  )
}

export default PublishForm
