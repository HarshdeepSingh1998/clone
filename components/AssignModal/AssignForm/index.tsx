import { useEffect, useState } from 'react'
import {
  renderFieldRows,
  hostingTypeOptions
} from 'components/AssignModal/data'
import Button from '@/components/Button'
import ComboBox from '@/components/ComboBox'
import SelectIndicator from '@/components/SelectIndicator'
import { AssignFormProps } from 'components/AssignModal/types'
import {
  FormContainer,
  InputContainer,
  ButtonContainer
} from '@/styles/Components/AssignModal/AssignForm'

const AssignForm: React.FC<AssignFormProps> = ({
  assignOptions,
  contractOptions,
  handleSubmit,
  onSubmit,
  control,
  errors,
  watch,
  setIsAssignModalVisible,
  contractList,
  setValue,
  reset
}) => {
  const [, setShowContractFields] = useState(false)
  const [showAdditionalFields, setShowAdditionalFields] = useState(false)
  const hosting = watch('hosting')
  const contract = watch('contract')

  useEffect(() => {
    if (hosting === 'with_hosting') {
      setShowContractFields(true)
    } else {
      setShowContractFields(false)
    }

    if (hosting === 'with_hosting' && contract) {
      setShowAdditionalFields(true)
    } else {
      setShowAdditionalFields(false)
    }
  }, [hosting, contract, watch])

  useEffect(() => {
    const contractDetails: any = contractList?.find(
      (contractInfo: any) => contractInfo._id === contract
    )
    setValue(`location`, contractDetails?.location)
    setValue(`hostRate`, contractDetails?.hostRate)
    setValue(`depositPrice`, contractDetails?.depositPrice)
    setValue(`setupPrice`, contractDetails?.setupPrice)
    setValue(`expirationDate`, contractDetails?.expirationDate)
  }, [contract, setValue, contractList])

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
          {hosting === 'with_hosting' && (
            <SelectIndicator
              title="Contract Type"
              control={control}
              controllername="contract"
              defaultValue={''}
              placeholder="Select Contract Type"
              options={contractOptions}
              width="100%"
              errors={errors}
            />
          )}
          {showAdditionalFields && renderFieldRows(control, errors)}
          {showAdditionalFields && (
            <ComboBox
              title="Assign To"
              control={control}
              controllername="assignedUser"
              defaultValue=""
              assignOption={assignOptions}
              placeholder="Assign To"
              errors={errors}
            />
          )}
          {hosting === 'without_hosting' && (
            <ComboBox
              title="Assign To"
              control={control}
              controllername="assignedUser"
              defaultValue=""
              assignOption={assignOptions}
              placeholder="Assign To"
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
              onClick={() => {
                setIsAssignModalVisible(false)
                reset()
              }}
            />
          </ButtonContainer>
        </>
      </InputContainer>
    </FormContainer>
  )
}

export default AssignForm
