import Modal from 'react-modal'
import { useAddContractForm } from '@/utils/Customhooks/useAddContractForm'
import { useAddContractData } from '@/utils/Customhooks/useAddContractData'
import useSubmit from '@/utils/Callback/Admin/ContractManagementPage/AddContract'
import AddContractForm from 'components/AddContract/AddContractForm'
import { AddContractProps } from 'components/AddContract/types'
import { Style } from 'components/RevokeModal'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage
} from '@/styles/Components/AddContract'

const AddContract: React.FC<AddContractProps> = ({
  isModalOpen,
  closeModal,
  contractDetails,
  isEditModalOpen,
  setPage,
  setForceUpdate,
  setIsModalOpen
}) => {
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    setError,
    formState: { errors }
  } = useAddContractForm()

  useAddContractData(isEditModalOpen, setValue, contractDetails)

  const { onSubmit } = useSubmit({
    setError,
    contractDetails,
    closeModal,
    setPage,
    setForceUpdate,
    isEditModalOpen
  })

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          Add Contract
        </HeaderContainer>
        <AddContractForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          errors={errors}
          watch={watch}
          isEditModalOpen={isEditModalOpen}
          setValue={setValue}
          // addContractData={addContractData}
          reset={reset}
          closeModal={closeModal}
        />
      </ModalContainer>
    </Modal>
  )
}

export default AddContract
