import Modal from 'react-modal'
import { useDeleteProduct } from '@/utils/Customhooks/useBulkDeleteModal'
import { Style } from 'components/RevokeModal/index'
import { BulkDeleteModalProps } from 'components/BulkDeleteModal/types'
import Button from '@/components/Button'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  DescriptionContainer,
  ButtonContainer
} from 'styles/Components/BulkDeleteModal'

const BulkDeleteModal = ({
  isOpen,
  setShowDeleteModel,
  inventoryData
}: BulkDeleteModalProps) => {
  const { handleDeleteProduct } = useDeleteProduct({
    inventoryData
  })

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setShowDeleteModel('showBulkDeleteModel')}
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
              setShowDeleteModel('showBulkDeleteModel')
            }}
          />
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  )
}

export default BulkDeleteModal
