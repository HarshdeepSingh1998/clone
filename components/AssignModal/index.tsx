import Modal from 'react-modal'
import { useUserData } from '@/utils/Customhooks/useAssignModal'
import { useAssignModalForm } from '@/utils/Customhooks/useAssignModalForm'
import useSubmit from '@/utils/Callback/Admin/MarketPlacePage/AssignModal'
import { AssignModalProps } from 'components/AssignModal/types'
import { Style } from 'components/RevokeModal'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage
} from '@/styles/Components/AssignModal'
import AssignForm from './AssignForm'

const AssignModal: React.FC<AssignModalProps> = ({
  selectedProduct,
  setSelectedProductId,
  fetchData,
  setIsAssignModalVisible,
  inventoryPage,
  isOpen
}) => {
  const { contractList, assignOption, contractTypeOptions } = useUserData()

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
    fetchData
  )

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsAssignModalVisible(false)}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          Assign
        </HeaderContainer>
        <AssignForm
          assignOptions={assignOption}
          contractOptions={contractTypeOptions}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          errors={errors}
          watch={watch}
          setIsAssignModalVisible={setIsAssignModalVisible}
          contractList={contractList}
        />
      </ModalContainer>
    </Modal>
  )
}

export default AssignModal
