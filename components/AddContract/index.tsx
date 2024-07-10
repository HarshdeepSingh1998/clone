import Modal from 'react-modal'
import { useAddContractForm } from '@/utils/Customhooks/useAddContractForm'
import { AddProductProps } from 'components/AddContract/types'
import { Style } from 'components/RevokeModal'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage
} from '@/styles/Components/AddContract'

const AddProduct: React.FC<AddProductProps> = ({
  isOpen,
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
    formState: { errors }
  } = useAddContractForm()
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsModalOpen(false)}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          Hosting Preference
        </HeaderContainer>
        <PublishForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          errors={errors}
          watch={watch}
          setIsPublishModalVisible={setIsPublishModalVisible}
          setValue={setValue}
          publishModalData={publishModalData}
          reset={reset}
        />
      </ModalContainer>
    </Modal>
  )
}

export default AddProduct
