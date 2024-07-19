import Modal from 'react-modal'
import { RejectModalInterface } from 'components/RejectBidModal/types'
import { useRejectBidModal } from '@/utils/Customhooks/useRejectBidModal'
import { Style } from 'components/RevokeModal'
import Button from 'components/Button'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  DescriptionContainer,
  ButtonContainer
} from '@/styles/Components/RejectBidModal'

const RejectBidModal = ({
  closeModal,
  selectedBid,
  setPage,
  setForceUpdate,
  isOpen,
  setIsRejectBidModalVisible
}: RejectModalInterface) => {
  const { handleRejectBidBid } = useRejectBidModal({
    selectedBid,
    setIsRejectBidModalVisible,
    setPage,
    setForceUpdate
  })

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsRejectBidModalVisible(false)}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          Reject Bid
        </HeaderContainer>
        <DescriptionContainer>
          {'Do you want to reject bid?'}
        </DescriptionContainer>
        <ButtonContainer>
          <Button
            type="submit"
            variant="contained"
            disable={false}
            label={'Reject'}
            onClick={handleRejectBidBid}
          />
          <Button
            type="submit"
            variant="text"
            label={'Cancel'}
            onClick={() => {
              closeModal()
            }}
          />
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  )
}

export default RejectBidModal
