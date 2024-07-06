import Button from '@/components/Button'
import ComboBox from '@/components/ComboBox'
import Input from '@/components/Input'
import SelectIndicator from '@/components/SelectIndicator'
import {
  FormContainer,
  InputContainer,
  ButtonContainer
} from '@/styles/Components/AssignModal/AssignForm'
import {
  generateFormData,
  updatedFormData
} from '@/utils/Admin/MarketPlacePageContent/Form'
import { AssignFormProps } from 'components/AssignModal/types'
import { useEffect } from 'react'

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
  const hosting = watch('hosting')
  const contract = watch('contract')
  console.log('watch', hosting, contract)
  const formData = generateFormData(
    assignOptions,
    contractOptions,
    hostingTypeOptions,
    watch
  )

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
          {formData.map((field, index) => {
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
              case 'dropdown':
                return (
                  <SelectIndicator
                    key={index}
                    title={field.title}
                    control={control}
                    controllername={field.controllername}
                    defaultValue={field.defaultValue}
                    placeholder={field.placeholder}
                    options={field.options}
                    width="100%"
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
