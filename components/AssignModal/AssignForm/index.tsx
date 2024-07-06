import Button from '@/components/Button'
import ComboBox from '@/components/ComboBox'
import Input from '@/components/Input'
import SelectIndicator from '@/components/SelectIndicator'
import {
  FormContainer,
  InputContainer,
  ButtonContainer
} from '@/styles/Components/AssignModal/AssignForm'
import { generateFormData } from '@/utils/Admin/MarketPlacePageContent/Form'
import { AssignFormProps } from 'components/AssignModal/types'
import { useEffect, useState } from 'react'

const hostingTypeOptions = [
  { label: 'With Hosting', value: 'with_hosting' },
  { label: 'Without Hosting', value: 'without_hosting' }
]

const AssignForm: React.FC<AssignFormProps> = ({
  assignOptions,
  contractOptions,
  handleSubmit,
  onSubmit,
  control,
  errors,
  watch,
  setIsAssignModalVisible,
  contractList
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

  const formData = generateFormData(assignOptions)

  // useEffect(() => {
  //   const contractDetails: any = contractList?.find(
  //     (contractInfo: any) => contractInfo._id === contract
  //   )
  //   updatedFormData(contractDetails, formData)
  // }, [contract, contractList, formData])

  // const updatedForm = updatedFormData(
  //   contractList?.find((contractInfo: any) => contractInfo._id === contract),
  //   formData
  // )

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
          {showAdditionalFields &&
            formData.map((field, index) => {
              switch (field.inputType) {
                case 'input':
                  return (
                    <Input
                      key={index}
                      title={field.title}
                      control={control}
                      controllername={field.controllername}
                      defaultValue={field.defaultValue}
                      placeholder={field.placeholder}
                      type={field.type as any}
                      errors={errors}
                    />
                  )
                case 'combobox':
                  return (
                    <ComboBox
                      key={index}
                      title={field.title}
                      control={control}
                      controllername={field.controllername}
                      defaultValue={field.defaultValue}
                      assignOption={field.options}
                      placeholder={field.placeholder}
                      errors={errors}
                    />
                  )
                default:
                  return null
              }
            })}
          {hosting === 'without_hosting' && (
            <ComboBox
              title="Assign To"
              control={control}
              controllername="assign_to"
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
              onClick={() => setIsAssignModalVisible(false)}
            />
          </ButtonContainer>
        </>
      </InputContainer>
    </FormContainer>
  )
}

export default AssignForm
