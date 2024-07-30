import Modal from 'react-modal'
import { Style } from 'components/RevokeModal'
import { RevokeModalProps } from 'components/UserRevokeModal/types'
import Button from '@/components/Button'
import { useUserRevokeProduct } from '@/utils/Customhooks/useUserRevokeModal'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  DescriptionContainer,
  ButtonContainer
} from '@/styles/Components/UserRevokeModal'

const UserRevokeModal: React.FC<RevokeModalProps> = ({
  setShowRevokeModel,
  isOpen,
  inventoryData
}) => {
  const { handleRevoke } = useUserRevokeProduct({
    inventoryData,
    setShowRevokeModel
  })

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

export default UserRevokeModal
