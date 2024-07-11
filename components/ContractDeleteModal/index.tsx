import Modal from 'react-modal'
import { useDeleteProduct } from '@/utils/Customhooks/useContractDeleteModal'
import { Style } from 'components/RevokeModal/index'
import Button from '@/components/Button'
import { ContractDeleteModalProps } from 'components/ContractDeleteModal/types'
import {
  BoxImage,
  ButtonContainer,
  DescriptionContainer,
  HeaderContainer,
  ModalContainer
} from '@/styles/Components/ContractDeleteModal'

const ContractDeleteModal: React.FC<ContractDeleteModalProps> = ({
  contractData,
  setShowDeleteModel,
  setForceUpdate,
  setPage,
  isOpen
}) => {
  const { handleDeleteProduct } = useDeleteProduct({
    contractData,
    setForceUpdate,
    setPage,
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
          {'Delete Contract'}
        </HeaderContainer>
        <DescriptionContainer>
          {'Do you want to delete a contract?'}
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

export default ContractDeleteModal
