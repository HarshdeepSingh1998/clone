import Modal from 'react-modal'
import { useAcceptBidModal } from '@/utils/Customhooks/useAcceptBidModal'
import { AcceptBidModalInterface } from 'components/AcceptBidModal/types'
import { Style } from 'components/RevokeModal'
import Button from 'components/Button'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  DescriptionContainer,
  ButtonContainer
} from '@/styles/Components/AcceptBidModal'

const AcceptBidModal = ({
  closeModal,
  selectedBid,
  setPage,
  setForceUpdate,
  isOpen,
  setIsAcceptBidModalVisible
}: AcceptBidModalInterface) => {
  const { handleAcceptBid } = useAcceptBidModal({
    selectedBid,
    setIsAcceptBidModalVisible,
    setPage,
    setForceUpdate
  })

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsAcceptBidModalVisible(false)}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          Accept Bid
        </HeaderContainer>
        <DescriptionContainer>
          {'Do you want to accept bid?'}
        </DescriptionContainer>
        <ButtonContainer>
          <Button
            type="submit"
            variant="contained"
            disable={false}
            label={'Accept'}
            onClick={handleAcceptBid}
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

export default AcceptBidModal
