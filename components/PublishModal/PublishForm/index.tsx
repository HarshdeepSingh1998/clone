import { useEffect, useState } from 'react'
import { PublishFormProps } from 'components/PublishModal/types'
import {
  FormContainer,
  InputContainer,
  ButtonContainer
} from '@/styles/Components/PublishModal/PublishModalForm'
import SelectIndicator from '@/components/SelectIndicator'
import { hostingTypeOptions } from '../data'
import Button from '@/components/Button'

const PublishForm: React.FC<PublishFormProps> = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
  watch,
  setIsPublishModalVisible,
  setValue,
  publishModalData
}) => {
  const [, setShowContractFields] = useState(false)
  const [showAdditionalFields, setShowAdditionalFields] = useState(false)

  useEffect(() => {
    if (publishModalData.hosting === 'with_hosting') {
      setShowContractFields(true)
    } else {
      setShowContractFields(false)
    }

    if (
      publishModalData.hosting === 'with_hosting' &&
      publishModalData.contract
    ) {
      setShowAdditionalFields(true)
    } else {
      setShowAdditionalFields(false)
    }
  }, [publishModalData.hosting, publishModalData.contract, watch])

  console.log('publishModalData', publishModalData)
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
          {publishModalData.hosting === 'with_hosting' && (
            <SelectIndicator
              title="Contract Type"
              control={control}
              controllername="contract"
              defaultValue={''}
              placeholder="Select Contract Type"
              options={publishModalData.contractOptions}
              width="100%"
              errors={errors}
            />
          )}
          <ButtonContainer disable={false}>
            <Button
              type="submit"
              variant="contained"
              disable={false}
              label={'Submit'}
            />
            <Button
              type="submit"
              variant="text"
              label={'Cancel'}
              onClick={() => setIsPublishModalVisible(false)}
            />
          </ButtonContainer>
        </>
      </InputContainer>
    </FormContainer>
  )
}

export default PublishForm
