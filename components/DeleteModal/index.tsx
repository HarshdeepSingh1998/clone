import Modal from 'react-modal'
import { useDeleteProduct } from '@/utils/Customhooks/useDeleteModal'
import { Style } from 'components/RevokeModal/index'
import { DeleteModalProps } from 'components/DeleteModal/types'
import Button from '@/components/Button'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  DescriptionContainer,
  ButtonContainer
} from 'styles/Components/DeleteModal'

const DeleteModal = ({
  setShowDeleteModel,
  isOpen,
  fetchData,
  productDetails
}: DeleteModalProps) => {
  const { handleDeleteProduct } = useDeleteProduct({
    productDetails,
    fetchData,
    setShowDeleteModel
  })

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setShowDeleteModel(false)}
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
              setShowDeleteModel(false)
            }}
          />
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  )
}

export default DeleteModal
