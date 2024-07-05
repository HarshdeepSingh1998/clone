import Modal from 'react-modal'
import { AssignModalProps } from 'components/AssignModal/types'

const AssignModal: React.FC<AssignModalProps> = ({
  selectedProduct,
  setSelectedProductId,
  fetchData,
  setIsAssignModalVisible,
  inventoryPage,
  isOpen
}) => {
  const Style = {
    content: {
      overflow: 'hidden',
      height: '100%',
      width: '100%',
      inset: 0,
      padding: '0px'
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setShowRevokeModel(false)}
      style={Style}
    >
      <ModalContainer></ModalContainer>
    </Modal>
  )
}

export default AssignModal
