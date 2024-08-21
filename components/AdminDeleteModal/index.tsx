import Modal from 'react-modal'
import { useDeleteProduct } from '@/utils/Customhooks/useAdminDeleteModal'
import { Style } from 'components/RevokeModal/index'
import { AdminDeleteModalProps } from 'components/AdminDeleteModal/types'
import Button from '@/components/Button'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  DescriptionContainer,
  ButtonContainer
} from 'styles/Components/DeleteModal'

const AdminDeleteModal = ({
  isOpen,
  setShowDeleteModel,
  inventoryData
}: AdminDeleteModalProps) => {
  const { handleDeleteProduct } = useDeleteProduct({
    inventoryData
  })

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setShowDeleteModel('showDeleteModel')}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          {'Delete Machine'}
        </HeaderContainer>
        <DescriptionContainer>
          {'Do you want to delete machine?'}
        </DescriptionContainer>
        <ButtonContainer>
          <Button
            type="submit"
            variant={'contained'}
            label={'Delete'}
            onClick={() => handleDeleteProduct()}
          />
          <Button
            type="submit"
            variant={'outline'}
            label={'Cancel'}
            onClick={() => {
              setShowDeleteModel('showDeleteModel')
            }}
          />
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  )
}

export default AdminDeleteModal
