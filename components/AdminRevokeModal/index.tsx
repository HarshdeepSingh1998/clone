import Modal from 'react-modal'
import { AdminRevokeModalProps } from 'components/AdminRevokeModal/types'
import Button from '@/components/Button'
import { useAdminRevokeProduct } from '@/utils/Customhooks/useAdminRevokeModal'
import { Style } from 'components/RevokeModal'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  DescriptionContainer,
  ButtonContainer
} from '@/styles/Components/AdminRevokeModal'

const RevokeModal: React.FC<AdminRevokeModalProps> = ({
  isOpen,
  setShowRevokeModel,
  inventoryData
}) => {
  const { handleRevokeProduct } = useAdminRevokeProduct({
    inventoryData
  })

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setShowRevokeModel('showRevokeModel')}
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
            onClick={() => handleRevokeProduct()}
          />
          <Button
            type="submit"
            variant={'outline'}
            label={'Cancel'}
            onClick={() => {
              setShowRevokeModel('showRevokeModel')
            }}
          />
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  )
}

export default RevokeModal
