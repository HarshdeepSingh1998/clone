import Modal from 'react-modal'
import Image from 'next/image'
import { PaymentConfirmationModalProps } from 'components/PaymentConfirmationModal/types'
import usePaymentConfirmationModal from '@/utils/Customhooks/usePaymentConfirmationModal'
import Button from 'components/Button'
import { Style } from 'components/RevokeModal'
import FanImage from 'assets/images/images/fan-image.png'
import {
  ButtonContainer,
  HeaderContainer,
  ModalContainer,
  DescriptionContainer
} from '@/styles/Components/PaymentConfirmationModal'

const PaymentConfirmationModal = ({
  isOpen,
  setPaymentConformationModal,
  fetchSalesData,
  productId
}: PaymentConfirmationModalProps) => {
  const { handleNoClick, handleSubmitClick } = usePaymentConfirmationModal(
    fetchSalesData,
    productId,
    setPaymentConformationModal
  )
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setPaymentConformationModal(false)}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <Image src={FanImage} alt="Asic mining" />
        </HeaderContainer>
        <DescriptionContainer>
          Have you received the payment?
        </DescriptionContainer>
        <ButtonContainer>
          <Button
            type="submit"
            variant={'outline'}
            label={'No'}
            onClick={() => handleNoClick()}
          />
          <Button
            type="submit"
            variant={'contained'}
            label={'Yes'}
            onClick={() => {
              handleSubmitClick()
            }}
          />
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  )
}

export default PaymentConfirmationModal
