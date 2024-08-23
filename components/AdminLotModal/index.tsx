import Modal from 'react-modal'
import { useAdminLotModalForm } from '@/utils/Customhooks/useAdminLotModalForm'
import { AdminLotModalProps } from 'components/AdminLotModal/types'
import useAdminLotModalData from '@/utils/Customhooks/useAdminLotModalData'
import useSubmit from '@/utils/Callback/Admin/Inventorymanagement/LotModal'
import LotForm from 'components/AdminLotModal/LotForm'
import { Style } from 'components/RevokeModal/index'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage
} from '@/styles/Components/AdminLotModal'

const AdminLotModal: React.FC<AdminLotModalProps> = ({ inventoryData }) => {
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    getValues,
    formState: { errors }
  } = useAdminLotModalForm()
  const lotModalData = useAdminLotModalData(
    inventoryData,
    watch,
    setValue,
    reset,
    getValues
  )
  const { onSubmit } = useSubmit(inventoryData, lotModalData, reset)

  return (
    <Modal
      isOpen={inventoryData.isModalOpen.isLotModalOpen}
      onRequestClose={() => inventoryData.toggleModal('isLotModalOpen')}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          Create Lot
        </HeaderContainer>
        <LotForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          errors={errors}
          watch={watch}
          inventoryData={inventoryData}
          setValue={setValue}
          reset={reset}
          lotModalData={lotModalData}
          unitAskingPrice={lotModalData.unitAskingPrice}
          toggleValue={lotModalData.toggleValue}
          handleToggleChange={lotModalData.handleToggleChange}
          setUnitAskingPrice={lotModalData.setUnitAskingPrice}
        />
      </ModalContainer>
    </Modal>
  )
}

export default AdminLotModal
