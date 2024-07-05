import Modal from 'react-modal'
import { RevokeModalProps } from 'components/RevokeModal/types'
import Button from '@/components/Button'
import { useRevokeProduct } from '@/utils/Customhooks/useRevokeModal'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  DescriptionContainer,
  ButtonContainer
} from '@/styles/Components/RevokeModal'

const RevokeModal: React.FC<RevokeModalProps> = ({
  setShowRevokeModel,
  isOpen,
  fetchData,
  selectedProduct,
  productDetails
}) => {
  const { handleRevoke } = useRevokeProduct({
    productDetails,
    selectedProduct,
    fetchData,
    setShowRevokeModel
  })
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
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          Revoke Machine
        </HeaderContainer>
        <DescriptionContainer>
          Do you want to revoke machine from marketplace?
        </DescriptionContainer>
        <ButtonContainer>
          <Button
            type="submit"
            variant={'contained'}
            label={'Revoke'}
            onClick={() => handleRevoke()}
          />
          <Button
            type="submit"
            variant={'outline'}
            label={'Cancel'}
            onClick={() => {
              setShowRevokeModel(false)
            }}
          />
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  )
}

export default RevokeModal
