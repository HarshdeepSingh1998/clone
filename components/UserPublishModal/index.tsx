import Modal from 'react-modal'
import { useUserPublishModalForm } from '@/utils/Customhooks/useUserPublishForm'
import { PublishModalProps } from 'components/UserPublishModal/types'
import useUserPublishData from '@/utils/Customhooks/useUserPublishModalData'
import useSubmit from '@/utils/Callback/User/InventoryManagementPage/PublishModal'
import PublishForm from 'components/UserPublishModal/PublishForm'
import { Style } from 'components/RevokeModal/index'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage
} from '@/styles/Components/UserPublishModal'

const UserPublishModal: React.FC<PublishModalProps> = ({ inventoryData }) => {
  const context = {
    productDetails: inventoryData.productDetails,
    auctionType: 'Bid'
  }
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useUserPublishModalForm(context)
  const publishModalData = useUserPublishData(setValue)
  const { onSubmit } = useSubmit(inventoryData, reset)
  return (
    <Modal
      isOpen={inventoryData.isPublishModalVisible}
      onRequestClose={() => inventoryData.setIsPublishModalVisible(false)}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          Publish
        </HeaderContainer>
        <PublishForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          errors={errors}
          watch={watch}
          inventoryData={inventoryData}
          setValue={setValue}
          reset={reset}
          publishModalData={publishModalData}
        />
      </ModalContainer>
    </Modal>
  )
}

export default UserPublishModal
