import Modal from 'react-modal'
import { useUserData } from '@/utils/Customhooks/useBulkAssignModal'
import { useBulkAssignModalForm } from '@/utils/Customhooks/useBulkAssignModalForm'
import useSubmit from '@/utils/Callback/Admin/Inventorymanagement/BulkAssignModal'
import { AssignModalProps } from 'components/BulkAssignModal/types'
import { Style } from 'components/RevokeModal'
import AssignForm from 'components/BulkAssignModal/AssignForm'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage
} from '@/styles/Components/BulkAssignModal'

const BulkAssignModal: React.FC<AssignModalProps> = ({
  fetchData,
  setIsAssignModalVisible,
  inventoryPage,
  isOpen,
  setPage,
  setUserPage,
  setSelectedProductIds,
  setForceUpdate,
  fetchContractData,
  selectedProductIds
}) => {
  const { contractList, assignOption, contractTypeOptions, setUserDataList } =
    useUserData()

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    setError,
    formState: { errors }
  } = useBulkAssignModalForm()

  const { onSubmit } = useSubmit(
    setError,
    watch,
    setValue,
    reset,
    setIsAssignModalVisible,
    inventoryPage,
    fetchData,
    setPage,
    setUserPage,
    setSelectedProductIds,
    setForceUpdate,
    fetchContractData,
    setUserDataList,
    selectedProductIds
  )

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        if (inventoryPage) {
          setIsAssignModalVisible('bulkAssignModalVisible')
        } else {
          setIsAssignModalVisible(false)
        }
      }}
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
          setValue={setValue}
          reset={reset}
          inventoryPage={inventoryPage}
        />
      </ModalContainer>
    </Modal>
  )
}

export default BulkAssignModal
