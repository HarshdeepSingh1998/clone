import Modal from 'react-modal'
import { usePublishModalForm } from '@/utils/Customhooks/usePublishModalForm'
import { PublishModalProps } from 'components/PublishModal/types'
import { usePublishData } from '@/utils/Customhooks/usePublishModal'
import useSubmit from '@/utils/Callback/Admin/MarketPlacePage/PublishModal'
import PublishForm from 'components/PublishModal/PublishForm'
import { Style } from 'components/RevokeModal/index'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage
} from '@/styles/Components/PublishModal'

const PublishModal: React.FC<PublishModalProps> = ({
  selectedProduct,
  fetchData,
  setIsPublishModalVisible,
  inventoryPage,
  isOpen
}) => {
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = usePublishModalForm()

  const publishModalData = usePublishData(watch, setValue, reset)
  const { onSubmit } = useSubmit(
    reset,
    selectedProduct,
    setIsPublishModalVisible,
    inventoryPage,
    fetchData,
    publishModalData
  )
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsPublishModalVisible(false)}
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

export default PublishModal
