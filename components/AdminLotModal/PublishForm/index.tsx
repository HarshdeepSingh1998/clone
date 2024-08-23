/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import { PublishFormProps } from 'components/AdminLotModal/types'
import SelectIndicator from '@/components/SelectIndicator'
import {
  currencyData,
  dataPickerData,
  hostingTypeOptions,
  renderFieldRows,
  withoutHostingCurrencyData
} from 'components/AdminLotModal/data'
import Button from '@/components/Button'
import CurrencyDropdown from '@/components/CurrencyDropdown'
import Switch from '@/components/Switch'
import DatePicker from '@/components/DatePicker'
import {
  FormContainer,
  InputContainer,
  ButtonContainer,
  DatePickerContainer,
  InputContent,
  TotalPriceContainer,
  FormContent
} from '@/styles/Components/AdminLotModal/PublishForm'

const PublishForm: React.FC<PublishFormProps> = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
  setIsPublishModalVisible,
  publishModalData,
  reset,
  inventoryPage,
  unitAskingPrice,
  setUnitAskingPrice,
  children
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
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormContent>
          {children}
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
                  options={publishModalData.ContractIdOptions}
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
                      controllername={currencyData.controllername}
                      title={currencyData.title}
                    />
                    <Switch
                      adminLotModal={publishModalData}
                      startvalue="Sell"
                      endvalue="Auction"
                    />
                  </InputContent>
                  <TotalPriceContainer>
                    Total Asking Price: <span>${unitAskingPrice} </span>
                  </TotalPriceContainer>
                  <div>
                    {publishModalData.toggleValue === 'Bid' && (
                      <DatePickerContainer>
                        {dataPickerData.map(data => (
                          <DatePicker
                            publishModalData={publishModalData as any}
                            controllername={data.controllername}
                            control={control}
                            errors={errors}
                            title={data.title}
                          />
                        ))}
                      </DatePickerContainer>
                    )}
                  </div>
                </>
              )}
              {publishModalData.hostingType === 'without_hosting' && (
                <>
                  <Switch
                    adminLotModal={publishModalData}
                    className="switch"
                    startvalue="Auction"
                    endvalue="Sell"
                  />
                  {publishModalData.toggleValue === 'Bid' && (
                    <>
                      <InputContent>
                        {withoutHostingCurrencyData.map(data => (
                          <CurrencyDropdown
                            control={control}
                            errors={errors}
                            controllername={data.controllername}
                            title={data.title}
                          />
                        ))}
                      </InputContent>
                      <DatePickerContainer>
                        {dataPickerData.map(data => (
                          <DatePicker
                            publishModalData={publishModalData as any}
                            controllername={data.controllername}
                            control={control}
                            errors={errors}
                            title={data.title}
                          />
                        ))}
                      </DatePickerContainer>
                    </>
                  )}
                  {publishModalData.toggleValue !== 'Bid' && (
                    <InputContent>
                      {withoutHostingCurrencyData.map(data => (
                        <CurrencyDropdown
                          control={control}
                          errors={errors}
                          controllername={data.controllername}
                          title={data.title}
                        />
                      ))}
                    </InputContent>
                  )}
                </>
              )}
            </>
          </InputContainer>
        </FormContent>
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
              if (inventoryPage) {
                setIsPublishModalVisible('isLotModalOpen')
              } else {
                setIsPublishModalVisible(false)
              }

              reset()
              setUnitAskingPrice(0)
            }}
          />
        </ButtonContainer>
      </FormContainer>
    </>
  )
}

export default PublishForm
