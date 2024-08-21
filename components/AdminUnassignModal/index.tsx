import Modal from 'react-modal'
import { useUnassignProduct } from '@/utils/Customhooks/useAdminUnassignModal'
import { Style } from 'components/RevokeModal/index'
import { AdminUnassignModalProps } from 'components/AdminUnassignModal/types'
import Button from '@/components/Button'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  DescriptionContainer,
  ButtonContainer
} from 'styles/Components/AdminDeleteModal'

const AdminUnassignModal = ({
  isOpen,
  setShowUnassignModel,
  inventoryData
}: AdminUnassignModalProps) => {
  const { handleUnassignProduct } = useUnassignProduct({
    inventoryData
  })

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setShowUnassignModel('showUnassignedModel')}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          {'Unassign Machine'}
        </HeaderContainer>
        <DescriptionContainer>
          {'Do you want to unassign this machine?'}
        </DescriptionContainer>
        <ButtonContainer>
          <Button
            type="submit"
            variant={'contained'}
            label={'Unassign'}
            onClick={() => handleUnassignProduct()}
          />
          <Button
            type="submit"
            variant={'outline'}
            label={'Cancel'}
            onClick={() => {
              setShowUnassignModel('showUnassignedModel')
            }}
          />
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  )
}

export default AdminUnassignModal
