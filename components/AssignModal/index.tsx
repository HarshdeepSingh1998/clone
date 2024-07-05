import Modal from 'react-modal'
import { Controller } from 'react-hook-form'
import { useUserData } from '@/utils/Customhooks/useAssignModal'
import { useAssignModalForm } from '@/utils/Customhooks/useAssignModalForm'
import useSubmit from '@/utils/Callback/Admin/MarketPlacePage/AssignModal'
import { AssignModalProps } from 'components/AssignModal/types'
import { Style } from 'components/RevokeModal'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  FormContainer,
  InputContainer,
  InputContent,
  InputText,
  ErrorMessageContainer,
  ButtonContainer
} from '@/styles/Components/AssignModal'
import Button from '../Button'
import SelectIndicator from '../SelectIndicator'
import ComboBox from '../ComboBox'

const AssignModal: React.FC<AssignModalProps> = ({
  selectedProduct,
  setSelectedProductId,
  fetchData,
  setIsAssignModalVisible,
  inventoryPage,
  isOpen
}) => {
  const { contractList, assignOption, contractTypeOptions, userDataList } =
    useUserData()

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    setError,
    formState: { errors }
  } = useAssignModalForm()

  const { onSubmit } = useSubmit(
    setError,
    watch,
    setValue,
    reset,
    selectedProduct,
    setIsAssignModalVisible,
    inventoryPage,
    fetchData,
    contractList
  )

  debugger

  const formData = [
    {
      name: 'hosting',
      label: 'Hosting Type',
      type: 'select',
      placeholder: 'Select Hosting Type',
      options: contractTypeOptions,
      required: true,
      dependencies: []
    },
    {
      name: 'contract',
      label: 'Contract Id',
      type: 'select',
      placeholder: 'Select Contract Id',
      options: contractTypeOptions,
      required: true,
      dependencies: ['hosting', 'with_hosting']
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      placeholder: '',
      required: true,
      dependencies: ['contract'],
      disabled: true
    },
    {
      name: 'hostRate',
      label: 'Hosting Rate',
      type: 'number',
      placeholder: '',
      required: true,
      dependencies: ['contract'],
      disabled: true
    },
    {
      name: 'depositPrice',
      label: 'Deposit Amount',
      type: 'number',
      placeholder: '',
      required: true,
      dependencies: ['contract'],
      disabled: true
    },
    {
      name: 'setupPrice',
      label: 'Setup Fee',
      type: 'number',
      placeholder: '',
      required: true,
      dependencies: ['contract'],
      disabled: true
    },
    {
      name: 'expirationDate',
      label: 'Expiration Date',
      type: 'text',
      placeholder: '',
      required: true,
      dependencies: ['contract'],
      disabled: true
    },
    {
      name: 'assignedUser',
      label: 'Assign to',
      type: 'comboBox',
      placeholder: 'Select Assignee',
      required: true,
      dependencies: ['contract', 'hosting', 'without_hosting'],
      options: assignOption
    }
  ]

  const shouldDisplayField = (field, values) => {
    return field.dependencies.every(dep => {
      const [key, value] = dep.split('_')
      return values[key] === value
    })
  }

  const watchedValues = watch()

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsAssignModalVisible(false)}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          Revoke Machine
        </HeaderContainer>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            {formData.map(
              field =>
                shouldDisplayField(field, watchedValues) && (
                  <InputContent key={field.name}>
                    <InputText>{field.label}</InputText>
                    <Controller
                      name={field.name}
                      control={control}
                      defaultValue=""
                      render={({ field: inputField }) => {
                        switch (field.type) {
                          case 'select':
                            return (
                              <SelectIndicator
                                {...inputField}
                                width={'100%'}
                                placeholder={field.placeholder}
                                options={field.options}
                              />
                            )
                          case 'text':
                          case 'number':
                            return (
                              <input
                                {...inputField}
                                placeholder={field.placeholder}
                                type={field.type}
                                maxLength={50}
                                style={{
                                  maxWidth: '100%',
                                  border: '1px solid #DADADA'
                                }}
                                min={0}
                                max={10000000}
                                disabled={field.disabled}
                              />
                            )
                          case 'comboBox':
                            return (
                              <ComboBox
                                {...inputField}
                                assignOption={field.options}
                                onSelect={(selectedOption: {
                                  value: string
                                }) => {
                                  inputField.onChange(selectedOption.value)
                                }}
                                placeholder={field.placeholder}
                              />
                            )
                          default:
                            return null
                        }
                      }}
                    />
                    <ErrorMessageContainer id={`${field.name}-error`}>
                      {errors[field.name] && (
                        <span className="text-rose-500 text-left text-sm">
                          {errors[field.name]?.message}
                        </span>
                      )}
                    </ErrorMessageContainer>
                  </InputContent>
                )
            )}
          </InputContainer>
          <ButtonContainer>
            <Button type="submit" variant={'contained'} label={'Assign'} />
            <Button
              type="button"
              variant={'outline'}
              label={'Cancel'}
              onClick={() => {
                setIsAssignModalVisible(false)
                setValue('contract', '')
                reset()
              }}
            />
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </Modal>
  )
}

export default AssignModal
